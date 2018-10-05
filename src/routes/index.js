import React from "react";
import Main from "./../components/main/Main";
import Body from "./../components/body/Body";
import Header from "./../components/header/Header";

const routes = [
  {
    path: "", // optional
    action: () => <Main />
  },
  {
    path: "/action",
    action: () => console.log("checking child routes for /action"),
    children: [
      {
        path: "",
        action: () => <h3>Actions main</h3>
      },
      {
        path: "/body",
        action: () => <Body />
      },
      {
        path: "/header",
        action: () => <Header />
      },
      {
        path: "/:page",
        action: context => (
          <h3>
            Some page. This page name
            {` '${context.params.page}'`}
          </h3>
        )
      }
    ]
  },
  { path: "(.*)", action: () => <h1>Not Found</h1> }
];

export default routes;
