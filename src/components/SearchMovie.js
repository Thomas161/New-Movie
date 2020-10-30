import React from "react";
import styles from "../css/SearchMovie.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const SearchMovieGridLayout = `
// display:grid;
// padding: 20px;
// grid-template-columns: 1fr 1fr;
// `;
const SearchMovie = ({ movie, syn, vote, poster }) => {
  return (
    // <SearchMovieGridLayout>
    <div className="grid-container">
      <h2 className={styles.a}>{movie}</h2>
      <p className={styles.b}>{syn}</p>
      <p className={styles.c}>{vote} </p>
      <img
        className={styles.d}
        src={`https://image.tmdb.org/t/p/w200/${poster}`}
        alt=""
      />
    </div>
    // </SearchMovieGridLayout>
  );
};
export default SearchMovie;
