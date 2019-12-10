import React from "react";
import styles from "../css/SearchMovie.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchMovie = ({ movie, syn, vote, poster }) => {
  return (
    <div className="grid-container">
      <h2 className={styles.a}>{movie}</h2>
      <p className={styles.b}>{syn}</p>
      <p className={styles.c}>{vote} </p>
      <img
        className={styles.d}
        src={`https://image.tmdb.org/t/p/w300/${poster}`}
        alt=""
      />
    </div>
  );
};
export default SearchMovie;
