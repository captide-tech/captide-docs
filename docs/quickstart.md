---
sidebar_position: 2
---

# Quickstart Guide

This guide will help you get started with Captide quickly, showing you how to set up both the REST API and the JavaScript SDK.

## Prerequisites

Before you begin, make sure you have:

- A Captide account and API key (get one at [captide.co](https://captide.co))
- Node.js installed (for the JavaScript SDK)

## Using the REST API

### Authentication

All API requests require authentication using your API key in the header:

```bash
curl -X POST "https://rest-api-captide.co/v1/generate" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Hello, Captide!",
    "max_tokens": 100
  }'
```

### Basic Example

Here's a simple example of using the Captide API to generate text:

```bash
curl -X POST "https://rest-api-captide.co/v1/generate" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Write a short poem about technology",
    "max_tokens": 150,
    "temperature": 0.7
  }'
```

## Using the JavaScript SDK

### Installation

Install the Captide SDK in your project:

```bash
npm install captide
# or
yarn add captide
```

### Configuration

Initialize the SDK with your API key:

```typescript
import { Captide } from 'captide';

// Initialize the client
const captide = new Captide({
  apiKey: 'YOUR_API_KEY',
});
```

### Basic Example

Here's a simple example of using the SDK to generate text:

```typescript
import { Captide } from 'captide';

// Initialize the client
const captide = new Captide({
  apiKey: 'YOUR_API_KEY',
});

// Generate text
async function generateText() {
  try {
    const response = await captide.generate({
      prompt: 'Write a short poem about technology',
      maxTokens: 150,
      temperature: 0.7,
    });
    
    console.log(response.text);
  } catch (error) {
    console.error('Error:', error);
  }
}

generateText();
```

## Next Steps

Now that you've seen how to make basic calls with both the API and SDK, you can:

- Explore the [API Reference](/docs/api) for all available endpoints
- Check out the [SDK Reference](/docs/integration/backend) for detailed documentation on all methods
- Learn how to integrate Captide with [Backend Applications](./integration/backend)
- Learn how to integrate Captide with [Frontend Applications](./integration/frontend)

If you have any questions or run into issues, please reach out to our support team at support@captide.co. 