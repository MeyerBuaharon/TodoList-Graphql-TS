import * as React from "react";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { ApolloProvider } from "@apollo/react-hooks";

import TodoPrivateWrapper from "./Todo/TodoPrivateWrapper";
import TodoPublicWrapper from "./Todo/TodoPublicWrapper";
import OnlineUsersWrapper from "./OnlineUsers/OnlineUsersWrapper";
import Header from "./Header";

const createApolloClient = () => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: "wss://todoslist.hasura.app/v1/graphql",
      options: {
        reconnect: true,
      },
    }),
    cache: new InMemoryCache(),
  });
};

const App = () => {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <div className="container-fluid p-left-right-0">
          <div className="col-xs-12 col-md-9 p-left-right-0">
            <div className="col-xs-12 col-md-6 sliderMenu p-30">
              <TodoPrivateWrapper />
            </div>
            <div className="col-xs-12 col-md-6 sliderMenu p-30 bg-gray border-right">
              <TodoPublicWrapper />
            </div>
          </div>
          <div className="col-xs-12 col-md-3 p-left-right-0">
            <div className="col-xs-12 col-md-12 sliderMenu p-30 bg-gray">
              <OnlineUsersWrapper />
            </div>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
