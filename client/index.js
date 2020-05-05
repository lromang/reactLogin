import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import App from './components/App';
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

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
                  <Route path="/signup" component={SignUp}></Route>
                  <Route path="/login" component={LogIn}></Route>
              </Route>
          </Router>
      </ApolloProvider>
  );
};

ReactDOM.render(<Root/>, document.querySelector('#root'));
