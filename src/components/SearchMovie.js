import React from "react";
import "../css/SearchMovie.css";

const SearchMovie = ({ movie, syn, vote, poster, release }) => {
  return (
    <div className="grid-container">
      <h2 id="title">{movie}</h2>
      <p id="synopsis">{syn}</p>
      <p id="rating">{vote} </p>
      <p id="releaseDate">{release}</p>
      <img
        id="poster"
        src={`https://image.tmdb.org/t/p/w200/${poster}`}
        alt=""
      />
    </div>
  );
};
export default SearchMovie;
