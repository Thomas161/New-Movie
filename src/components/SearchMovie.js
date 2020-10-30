import React from "react";
import "../css/SearchMovie.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const SearchMovieGridLayout = `
// display:grid;
// padding: 20px;
// grid-template-columns: 1fr 1fr;
// `;
const SearchMovie = ({ movie, syn, vote, poster, release }) => {
  return (
    // <SearchMovieGridLayout>
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
    // </SearchMovieGridLayout>
  );
};
export default SearchMovie;
