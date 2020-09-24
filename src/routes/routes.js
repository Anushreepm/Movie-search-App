import React from "react";
import App from "../App";

function routes() {
  return (
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  );
}

export default routes;
