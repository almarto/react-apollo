import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const httpLink = createHttpLink({ uri: "http://localhost:4000" });

const client = new ApolloClient({
  link: HttpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
