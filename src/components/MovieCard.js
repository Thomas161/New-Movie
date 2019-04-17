import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/MovieCard.css";

const MovieCard = props => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{props.publisher} </h3>
          {"  "}
          {Date(Date.now()).toString()}
          <hr />
          <p className="card-text">{props.body}</p>
        </div>
      </div>
      <br />
      <br />
      <br />

      <Link to="/" alt="home" style={{ fontSize: "2em", fontWeight:'bolder', backgroundColor: 'white' ,padding: "20px" }}>
        RETURN TO HOME
      </Link>
  
    </div>
  );
};

export default MovieCard;
