import React, { useState, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../contexts/GlobalState";
import data from "./Data";

function SearchMovies() {
  const { movieData, putData } = useContext(GlobalContext);
  const [searchtext, setSearch] = useState("");
  const [dropdownvalue, setDropdown] = useState("all");
  const url = "http://www.omdbapi.com/?apikey=1cae0fbe&s=";

  //   console.log(searchtext, dropdownvalue);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${url}${searchtext}`);
    getData();
  };

  const getData = async () => {
    console.log("i am inside");
    putData(data);
    const response = await axios.get(`${url}${searchtext}`);
    putData(response);
  };

  return (
    <div className="search-movies">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search a movie"
          value={searchtext}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          name="dropdown"
          id="dropdown"
          onChange={(e) => setDropdown(e.target.value)}
        >
          <option value="all">All</option>
          <option value="movies">Movies</option>
          <option value="series">Series</option>
          <option value="episodes">Episodes</option>
        </select>
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchMovies;
