import React from "react";
import "../css/SearchMovie.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchMovie = props => {
  return (
    <div className="grid-container">
      <h2 className="a">{props.movie}</h2>
      <p className="b">{props.syn}</p>
      <p className="c">{props.vote} </p>
      <img
        className="d"
        src={`https://image.tmdb.org/t/p/w300/${props.poster}`}
        alt=""
      />
    </div>
  );
};
export default SearchMovie;
