import React from 'react';
import OriginalApiDoc from '@theme-original/ApiDoc';
import OpenAPIProviderWrapper from '@site/src/components/OpenAPIProviderWrapper';

export default function ApiDoc(props) {
  return (
    <OpenAPIProviderWrapper>
      <OriginalApiDoc {...props} />
    </OpenAPIProviderWrapper>
  );
} 