import React from "react";
import "../css/MovieCard.css";
import logo from "../images/firebase.png";

const MovieCard = ({ publisher, body }) => {
  return (
    <>
      <div className="containerCard">
        <div className="movieCard">
          <div className="flipCardInner">
            <div className="flipCardFront">
              <div id="publisher">{publisher} </div>
              {"  "}

              <p id="reviewDate">{Date(Date.now()).toString()}</p>
              <p id="lead">"{body}"</p>
            </div>
            <div className="flipCardBack">
              <img src={logo} alt="firebase_unknown" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
