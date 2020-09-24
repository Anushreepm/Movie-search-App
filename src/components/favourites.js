import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import Header from "./Header";

function Favourites() {
  const { favourites } = useContext(GlobalContext);
  const length = favourites.length;
  console.log(favourites);
  const CardJSX = favourites.map((data) => {
    return (
      <div className="movie-card-layout" key={data.imdbID}>
        <div className="movie-card">
          <div className="favourite" id={data.imdbID}>
            {!data.isFav && <img src="001-star-black.png" id={data.imdbID} />}
            {data.isFav && <img src="001-star.png" id={data.imdbID} />}
          </div>
          <div className="img">
            <img src={`${data.Poster}`} height="100%" width="100%" />
          </div>
          <div className="title">{data.Title}</div>
          <div className="description">Released on : {data.Year}</div>
        </div>
      </div>
    );
  });
  console.log(length);
  return (
    <div className="main-container">
      <Header />
      <div className="movie-container">
        <div className="movie-card-container">
          {length && CardJSX}
          {!length && <h1>No favourites</h1>}
        </div>
      </div>
    </div>
  );
}

export default Favourites;
