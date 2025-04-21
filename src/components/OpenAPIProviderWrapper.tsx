import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Create a simpler reducer with all possible fields the component might access
const initialState = {
  // Minimal set of fields that might be accessed
  tryItTab: {
    value: "parameters" 
  },
  contentType: {
    value: "application/json"
  },
  accept: {
    value: "application/json"
  },
  server: {
    value: "https://rest-api.captide.co" // Default to the production URL
  },
  requestBodyContent: {},
  responseBodyContent: {},
  loading: false,
  serverResponse: null,
  errMessage: null
};

// Simple reducer that just returns the state
function rootReducer(state = initialState, action) {
  return state;
}

// Create store with thunk middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

interface OpenAPIProviderWrapperProps {
  children: ReactNode;
}

export default function OpenAPIProviderWrapper({ children }: OpenAPIProviderWrapperProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
} 