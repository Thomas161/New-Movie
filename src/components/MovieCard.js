import React from "react";
// import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../css/MovieCard.css";

const MovieCard = ({ publisher, body }) => {
  return (
    <>
      <div className="container">
        <h5 id="publisher">{publisher} </h5>
        {"  "}
        {Date(Date.now()).toString()}3<p className="lead">"{body}"</p>
      </div>
    </>
  );
};

export default MovieCard;
