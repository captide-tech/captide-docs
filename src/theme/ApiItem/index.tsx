import React from 'react';
import OriginalApiItem from '@theme-original/ApiItem';
import OpenAPIProviderWrapper from '@site/src/components/OpenAPIProviderWrapper';

export default function ApiItem(props) {
  return (
    <OpenAPIProviderWrapper>
      <OriginalApiItem {...props} />
    </OpenAPIProviderWrapper>
  );
} 