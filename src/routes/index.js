import React from "react";
import Main from "./../components/main/Main";
import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";

const routes = [
  {
    path: "", // optional
    action: () => <Main />
  },
  {
    path: "/first",
    action: () => <Firstpage />
  },
  {
    path: "/second",
    action: () => <Secondpage />
  },
  {
    path: "/third",
    action: () => <Thirdpage />
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
