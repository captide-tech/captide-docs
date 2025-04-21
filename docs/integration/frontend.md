---
sidebar_position: 2
---

# Frontend Integration

This guide explains how to integrate Captide with frontend applications using React, Vue, or vanilla JavaScript.

## Important Security Note

**Never expose your Captide API key in frontend code!** The API key should always be kept on the server side. For frontend applications, you should create a backend API that acts as a proxy to the Captide API.

## React Integration

### Setup with Create React App

Here's how to set up Captide in a React application:

```tsx
// src/services/captideService.ts
export async function generateText(prompt: string, maxTokens = 100, temperature = 0.7) {
  try {
    const response = await fetch('/api/generate-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        maxTokens,
        temperature,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate text');
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error generating text:', error);
    throw error;
  }
}
```

```tsx
// src/components/TextGenerator.tsx
import React, { useState } from 'react';
import { generateText } from '../services/captideService';

const TextGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const generatedText = await generateText(prompt);
      setResult(generatedText);
    } catch (err) {
      setError('Failed to generate text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>AI Text Generator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="prompt">Enter prompt:</label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            cols={50}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Text'}
        </button>
      </form>
      
      {error && <div className="error">{error}</div>}
      
      {result && (
        <div className="result">
          <h3>Generated Text:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default TextGenerator;
```

## Vue.js Integration

Here's an example with Vue 3 and Composition API:

```vue
<!-- TextGenerator.vue -->
<template>
  <div class="text-generator">
    <h2>AI Text Generator</h2>
    <form @submit.prevent="generateText">
      <div>
        <label for="prompt">Enter prompt:</label>
        <textarea
          id="prompt"
          v-model="prompt"
          rows="4"
          cols="50"
          required
        ></textarea>
      </div>
      <button type="submit" :disabled="loading">
        {{ loading ? 'Generating...' : 'Generate Text' }}
      </button>
    </form>
    
    <div v-if="error" class="error">{{ error }}</div>
    
    <div v-if="result" class="result">
      <h3>Generated Text:</h3>
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const prompt = ref('');
const result = ref('');
const loading = ref(false);
const error = ref(null);

async function generateText() {
  loading.value = true;
  error.value = null;
  
  try {
    const response = await fetch('/api/generate-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt.value,
        maxTokens: 100,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate text');
    }

    const data = await response.json();
    result.value = data.result;
  } catch (err) {
    error.value = 'Failed to generate text. Please try again.';
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.error {
  color: red;
  margin-top: 1rem;
}

.result {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
}
</style>
```

## Next.js Example

Next.js allows you to create API routes that can securely communicate with the Captide API:

```typescript
// pages/api/generate-text.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Captide } from 'captide';

const captide = new Captide({
  apiKey: process.env.CAPTIDE_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, maxTokens, temperature } = req.body;
    
    const response = await captide.generate({
      prompt,
      maxTokens: maxTokens || 100,
      temperature: temperature || 0.7,
    });
    
    res.status(200).json({ result: response.text });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate text' });
  }
}
```

Then use it in your component:

```tsx
// pages/index.tsx
import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/generate-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Text Generator</h1>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={prompt} 
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>
      
      {result && (
        <div>
          <h2>Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
```

## Browser Support and Polyfills

The Captide JavaScript SDK is compatible with modern browsers. If you need to support older browsers, consider adding polyfills for features like fetch and Promises.

## Next Steps

- Implement proper [error handling and user feedback](https://ui.dev/react-error-handling)
- Add [loading states and animations](https://www.joshwcomeau.com/react/animated-loading-skeletons/)
- Explore [streaming responses](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) for real-time text generation
- Check the [API Reference](/docs/api) for all available options 