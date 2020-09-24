import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

function MovieCards() {
  const { search, setFavourite, favourites, Response } = useContext(
    GlobalContext
  );
  console.log(search);
  console.log(favourites);

  const cardJSX = search.map((data) => {
    return (
      <div className="movie-card-layout" key={data.imdbID}>
        <div className="movie-card">
          <div className="favourite" id={data.imdbID}>
            {!data.isFav && (
              <img
                src="001-star-black.png"
                id={data.imdbID}
                onClick={(e) => setFavourite(e.target.id)}
              />
            )}
            {data.isFav && (
              <img
                src="001-star.png"
                id={data.imdbID}
                onClick={(e) => setFavourite(e.target.id)}
              />
            )}
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

  return (
    <div className="movie-card-container">
      {Response && cardJSX}
      {!Response && <h1>Unable to fetch records, please try again</h1>}
    </div>
  );
}

export default MovieCards;
