import React from 'react';
import ReactDOM from 'react-dom';
import { SchemaLink } from 'apollo-link-schema';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { schema, createLoaders } from '@showmax/graphql-example-schema';

import App from './components/App';


const client = new ApolloClient({
  link: new SchemaLink({
    schema: schema,
    context: {
      loaders: createLoaders(),
    },
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);
