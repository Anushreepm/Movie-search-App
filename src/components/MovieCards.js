import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

function MovieCards() {
  const { search } = useContext(GlobalContext);
  console.log(search);

  const cardJSX = search.map((data) => {
    return (
      <div className="movie-card-layout">
        <div className="movie-card">
          <div
            className="favourite"
            onClick={(e) => console.log("i am clicked")}
          >
            <img src="001-star-black.png" />
          </div>
          <div className="img">
            <img src={`${data.Poster}`} height="100%" width="100%" />
          </div>
          <div className="title">{data.Title}</div>
          <div className="description"></div>
        </div>
      </div>
    );
  });

  return (
    <div className="movie-card-container">
      {cardJSX}
    </div>
  );
}

export default MovieCards;
