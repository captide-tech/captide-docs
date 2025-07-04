---
sidebar_position: 1
---

# Introduction to Captide

Captide aggregates and processes **global corporate disclosures** from publicly listed companies, optimizing them for AI applications. Built on top of a database containing millions of filings from global equities, Captide's agentic RAG system provides the most intricate and accurate **agentic workflow for financial document analysis**.

With Captide’s APIs, asset managers, investment banks, and software companies can **embed AI across their financial workflows**—extracting insights from millions of authoritative documents without the complexity of building or maintaining agentic RAG infrastructure.

Captide is designed to augment investment research, enable alternative data extraction, and facilitate feature discovery–while ensuring the **highest levels of confidence and auditability in every output**.

This documentation is your guide to integrating Captide's APIs and leveraging our agentic AI systems.

## Core Use Cases

- **Build multi-agent systems** able to analyze and reason from authorative company reports.
- **Power internal RAG systems** with Captide's LLM-ready library of global corporate disclosures.
- Continuously monitor company disclosures to **detect material changes and surface early signals** of potential inflection points or shifts in outlook.
- **Screen companies** using changing disclosure signals to spot potential outliers or themes worth deeper analysis.
- **Extract and standardize hard-to-access data** to power investment models, enable faster benchmarking, and support investment thesis validation.
- Compare metrics, forward-looking guidance, risk language, and tone sentiment to **uncover divergences, outliers, or consensus shifts across custom peer sets.**
- Link key entities across disclosures to **synthesize key information and uncover dependencies across companies.**

## Core Components

- **REST API**:
  - **Document Access Endpoint**: Access corporate disclosures from companies across the world optimized for LLM ingestion.
  - **Chunk Retrieval Endpoint**: Retrieve relevant document excerpts and metadata tailored to user queries.
  - **Agent Response Endpoint**: Receive real-time, AI-generated answers via Server-Sent Events (SSE) with citations that link directly to original document passages.

- **JavaScript/TypeScript SDK**: Quickly integrate Captide components—like document viewers—into your frontend app for streamlined source auditing.

## Getting Started

To begin using Captide:

1. [Request a test API key](https://www.captide.ai/contact/api-request)
2. Follow our [Quickstart Guide](./quickstart)
3. Monitor your API usage and costs in the [Captide API dashboard](https://app.captide.co/api-dashboard)

[Book a demo](https://www.captide.ai/contact/api-request) to explore how Captide can support your unique workflows and goals.

## Coming Soon

- **Self-Hosting**: Deploy Captide’s agentic backend in your own infrastructure (currently in private beta)
- **MCP Integration**: Connect via the Model Context Protocol
- **A2A Protocol**: Inter-agent communication support through Agent-to-Agent Protocol