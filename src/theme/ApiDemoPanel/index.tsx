import React from 'react';
import OriginalApiDemoPanel from '@theme-original/ApiDemoPanel';
import OpenAPIProviderWrapper from '@site/src/components/OpenAPIProviderWrapper';

export default function ApiDemoPanel(props) {
  return (
    <OpenAPIProviderWrapper>
      <OriginalApiDemoPanel {...props} />
    </OpenAPIProviderWrapper>
  );
} 