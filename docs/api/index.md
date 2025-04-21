---
id: api-overview
title: API Overview
sidebar_label: Overview
sidebar_position: 1
---

# Captide API Documentation

Welcome to the Captide API documentation. Our REST API provides powerful AI capabilities that you can integrate into your applications.

## Authentication

All API endpoints require authentication using an API key. You can obtain your API key from the [Captide Dashboard](https://captide.co/dashboard).

Include your API key in the `Authorization` header of each request:

```
Authorization: Bearer YOUR_API_KEY
```

## Base URL

The base URL for all API endpoints is:

- Production: `https://rest-api-captide.co`
- Development (local): `http://localhost:8001`

## Rate Limiting

The API has rate limits to ensure fair usage. If you exceed the rate limits, you'll receive a `429 Too Many Requests` response.

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of requests:

- `2xx` - Success
- `4xx` - Client error (invalid request)
- `5xx` - Server error

Error responses include a JSON object with an `error` field providing details about what went wrong.

## API Resources

Use the sidebar to navigate through the available API endpoints. Each endpoint includes:

- Request parameters
- Example requests
- Response formats
- Error codes

## Need Help?

If you need assistance with the API, please contact our support team at support@captide.co. 