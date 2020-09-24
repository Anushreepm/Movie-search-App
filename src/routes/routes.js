import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../App";
import FavouriteMain from "../components/favouriteMain";
import Favourites from "../components/favourites";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/favourites" exact component={FavouriteMain} />
    </Switch>
  );
}

export default Routes;
