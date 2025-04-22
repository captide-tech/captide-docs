---
sidebar_position: 1
---

# Backend Integration

This guide explains how to integrate Captide's SEC document Q&A capabilities with your backend applications, focusing on Node.js/Express implementations.

## Node.js Integration

### Express.js Example

Here's an example of creating a proxy API with Express.js that forwards requests to Captide's API:

```typescript
import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const CAPTIDE_API_KEY = process.env.CAPTIDE_API_KEY;
const CAPTIDE_BASE_URL = 'https://rest-api-captide.co/api/v1';

// 1. Endpoint to get document snippets
app.post('/api/document-snippets', async (req, res) => {
  try {
    const { query } = req.body;
    
    const response = await fetch(`${CAPTIDE_BASE_URL}/rag/chunks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CAPTIDE_API_KEY}`
      },
      body: JSON.stringify({ query })
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching document snippets:', error);
    res.status(500).json({ 
      error: 'Failed to fetch document snippets' 
    });
  }
});

// 2. Endpoint to proxy document retrieval for source links
app.post('/api/document', async (req, res) => {
  try {
    const { source_link } = req.body;
    
    const response = await fetch(source_link, {
      headers: {
        'Authorization': `Bearer ${CAPTIDE_API_KEY}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching document:', error);
    res.status(500).json({ 
      error: 'Failed to fetch document' 
    });
  }
});

// 3. Streaming endpoint - proxy the SSE stream from Captide to client
app.post('/api/query-stream', async (req, res) => {
  try {
    const { query } = req.body;
    
    // Set headers for SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    
    const response = await fetch(`${CAPTIDE_BASE_URL}/rag/agent-query-stream`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CAPTIDE_API_KEY}`
      },
      body: JSON.stringify({ query })
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    // Forward the stream to the client
    response.body.pipe(res);
    
    // Handle client disconnect
    req.on('close', () => {
      response.body.destroy();
    });
  } catch (error) {
    console.error('Error in streaming query:', error);
    res.status(500).json({ 
      error: 'Failed to stream response' 
    });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Environment Variables and Security

Always store your API key in environment variables or a secure configuration system, never hardcode it in your application code.

Create a `.env` file in your project root:

```
CAPTIDE_API_KEY=your_api_key_here
```

Make sure to add `.env` to your `.gitignore` file to avoid committing sensitive credentials.

## Error Handling Best Practices

Implement proper error handling for the different types of requests:

```typescript
// Example of more comprehensive error handling
app.post('/api/document-snippets', async (req, res) => {
  try {
    // ... API request code ...
  } catch (error) {
    console.error('Error:', error);
    
    if (error.response) {
      // The API returned an error status code
      res.status(error.response.status).json({
        error: 'api_error',
        message: error.response.statusText || 'API error occurred'
      });
    } else if (error.request) {
      // Network error or timeout
      res.status(503).json({
        error: 'network_error',
        message: 'Unable to reach the Captide API'
      });
    } else {
      // Something else went wrong
      res.status(500).json({
        error: 'unknown_error',
        message: 'An unexpected error occurred'
      });
    }
  }
});
```

## Rate Limiting

Implement rate limiting to prevent abuse of your API endpoints:

```typescript
import rateLimit from 'express-rate-limit';

// Create a rate limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later'
});

// Apply to routes that call Captide
app.use('/api/document-snippets', apiLimiter);
app.use('/api/document', apiLimiter);
app.use('/api/query-stream', apiLimiter);
```

## Next Steps

- Set up the [Frontend Integration](./frontend) to connect with this backend
- For production use, obtain a license by [contacting our team](https://www.captide.co/demo) 