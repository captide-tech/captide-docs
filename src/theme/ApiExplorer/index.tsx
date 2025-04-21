import React from 'react';
import OriginalApiExplorer from '@theme-original/ApiExplorer';
import OpenAPIProviderWrapper from '@site/src/components/OpenAPIProviderWrapper';

export default function ApiExplorer(props) {
  return (
    <OpenAPIProviderWrapper>
      <OriginalApiExplorer {...props} />
    </OpenAPIProviderWrapper>
  );
} 