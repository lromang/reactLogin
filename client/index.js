import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import App from './components/App';

import {
    Route,
    Router,
    hashHistory,
    IndexRoute} from "react-router";

// Network interface
// for adding cookies to network requests
const networkInterface = createNetworkInterface({
    uri: '/graphql',
    opts: {
        credentials: 'same-origin'
    }
});

// Identifying objects by id
const client = new ApolloClient({
    networkInterface,
    dataIdFromObject: o => o.id
});

const Root = () => {
  return (
      <ApolloProvider client={client}>
          <Router history={hashHistory}>
              <Route path="/" component={App}>
                  <Route path="/login"></Route>
                  <Route path="/landing"></Route>
              </Route>
          </Router>
      </ApolloProvider>
  );
};

ReactDOM.render(<Root/>, document.querySelector('#root'));
