import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/captide-rest-api",
    },
    {
      type: "category",
      label: "Companies",
      items: [
        {
          type: "doc",
          id: "api/search-companies-api-v-1-companies-search-get",
          label: "Search Companies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-companies-api-v-1-companies-get",
          label: "List Companies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/search-company-documents-by-ticker-api-v-1-companies-ticker-ticker-documents-search-get",
          label: "Search Company Documents By Ticker",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/list-company-documents-by-ticker-api-v-1-companies-ticker-ticker-documents-get",
          label: "List Company Documents By Ticker",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Documents",
      items: [
        {
          type: "doc",
          id: "api/get-document-api-v-1-document-get",
          label: "Get Document",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "RAG",
      items: [
        {
          type: "doc",
          id: "api/search-chunks-api-v-1-rag-chunks-post",
          label: "Search Chunks",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/agent-query-stream-api-v-1-rag-agent-query-stream-post",
          label: "Agent Query Stream",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Health",
      items: [
        {
          type: "doc",
          id: "api/root-get",
          label: "Root",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
