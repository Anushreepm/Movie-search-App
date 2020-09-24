import React from "react";
import { useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();
  return (
    <div className="main-header">
      <div className="header-block" onClick={(e) => history.push("/")}>
        Home
      </div>
      <div
        className="header-block"
        onClick={(e) => history.push("/favourites")}
      >
        Favourites
      </div>
    </div>
  );
}

export default Header;
