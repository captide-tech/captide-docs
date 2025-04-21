---
sidebar_position: 1
---

# Backend Integration

This guide explains how to integrate Captide with your backend applications, covering common server frameworks like Express (Node.js), Flask (Python), and more.

## Node.js Integration

### Express.js Example

Here's an example of integrating Captide with an Express.js application:

```typescript
import express from 'express';
import { Captide } from 'captide';

const app = express();
app.use(express.json());

// Initialize Captide with your API key
const captide = new Captide({
  apiKey: process.env.CAPTIDE_API_KEY, // Store your API key in environment variables
});

// Create a route that uses Captide
app.post('/generate-text', async (req, res) => {
  try {
    const { prompt, maxTokens, temperature } = req.body;
    
    const response = await captide.generate({
      prompt,
      maxTokens: maxTokens || 100,
      temperature: temperature || 0.7,
    });
    
    res.json({ 
      success: true,
      result: response.text 
    });
  } catch (error) {
    console.error('Captide API error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to generate text' 
    });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### NestJS Integration

For NestJS applications, you can create a dedicated service:

```typescript
// captide.service.ts
import { Injectable } from '@nestjs/common';
import { Captide } from 'captide';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CaptideService {
  private captide: Captide;

  constructor(private configService: ConfigService) {
    this.captide = new Captide({
      apiKey: this.configService.get<string>('CAPTIDE_API_KEY'),
    });
  }

  async generateText(prompt: string, maxTokens = 100, temperature = 0.7) {
    try {
      const response = await this.captide.generate({
        prompt,
        maxTokens,
        temperature,
      });
      
      return response.text;
    } catch (error) {
      throw new Error(`Failed to generate text: ${error.message}`);
    }
  }
}
```

## Environment Variables and Security

Always store your API key in environment variables or a secure configuration system, never hardcode it in your application code.

For Node.js applications, you can use dotenv:

```bash
npm install dotenv
```

```typescript
// At the top of your application entry point
import dotenv from 'dotenv';
dotenv.config();

// Then use process.env.CAPTIDE_API_KEY
```

Create a `.env` file in your project root:

```
CAPTIDE_API_KEY=your_api_key_here
```

Make sure to add `.env` to your `.gitignore` file to avoid committing sensitive credentials.

## Rate Limiting and Error Handling

Implement proper error handling and rate limiting in your application:

```typescript
import { Captide } from 'captide';
import rateLimit from 'express-rate-limit';

// Set up rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later'
});

// Apply to routes that use Captide
app.use('/api/captide', apiLimiter);

// Improved error handling
app.post('/api/captide/generate', async (req, res) => {
  try {
    const result = await captide.generate(req.body);
    res.json(result);
  } catch (error) {
    // Detailed error handling
    if (error.response) {
      // The API returned an error
      console.error('API error:', error.response.data);
      res.status(error.response.status).json({
        error: error.response.data.error || 'API error',
        message: error.response.data.message || 'Something went wrong'
      });
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Network error:', error.request);
      res.status(500).json({
        error: 'network_error',
        message: 'Network error, please try again'
      });
    } else {
      // Something else happened
      console.error('Error:', error.message);
      res.status(500).json({
        error: 'unknown_error',
        message: 'An unexpected error occurred'
      });
    }
  }
});
```

## Next Steps

- Learn about [Frontend Integration](./frontend) to connect your backend with a frontend application
- Check out the [API Reference](/docs/api) for detailed endpoint documentation
- Explore advanced SDK features in the [SDK Reference](/docs/integration/backend) 