import React from "react";

const Body = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Body;
