import React from "react";
import Main from "./../components/main/Main";
import Payform from "./Payform";

const routes = [
  {
    path: "", // optional
    action: () => <Main />
  },
  {
    path: "/payform",
    action: () => <Payform />
  }
  // {
  //   path: "/:page",
  //   action: context => (
  //     <h3>
  //       Some page. This page name
  //       {` '${context.params.page}'`}
  //     </h3>
  //   )
  // }
];

export default routes;
