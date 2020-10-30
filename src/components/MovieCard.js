import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../css/MovieCard.css";

const MovieCard = ({ publisher, body }) => {
  return (
    <div>
      <div className="container">
        <h5 id="publisher">{publisher} </h5>
        {"  "}
        {Date(Date.now()).toString()}

        <p className="lead">"{body}"</p>
      </div>
    </div>
  );
};

export default MovieCard;
