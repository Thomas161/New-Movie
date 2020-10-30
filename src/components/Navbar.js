import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Review from "./Review";
import moviedb from "../images/moviedb.png";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav className="nav navbar-default bg-dark">
          <ul id="listItems">
            <li>
              <a href="https://www.themoviedb.org/" id="theMovieDbLink">
                <img src={moviedb} alt="the_movie_db" id="theMovieDbImage" />
              </a>
            </li>
            <li>
              <Link to="/review">
                <div id="reviewHeader">Wanna Write a Review?</div>
              </Link>
            </li>
          </ul>
          <div id="movieSearchApp">Movie Search App</div>
        </nav>
        <Switch>
          <Route path="/review" component={Review} />
        </Switch>
      </div>
    </Router>
  );
};
export default Navbar;
