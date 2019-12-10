import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/MovieCard.css";

const MovieCard = ({ publisher, body }) => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h3 className="display-4">{publisher} </h3>
          {"  "}
          {Date(Date.now()).toString()}
          <hr />
          <p className="lead">{body}</p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default MovieCard;
