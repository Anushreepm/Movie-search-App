import React from "react";
import { GlobalProvider } from "../contexts/GlobalState";
import Favourites from "./favourites";

function FavouriteMain() {
  return (
    <div>
      <GlobalProvider>
        <Favourites />
      </GlobalProvider>
    </div>
  );
}

export default FavouriteMain;
