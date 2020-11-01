import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Review from "./Review";
import Search from "./Search";
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
              <Link to={{ pathname: "/review" }}>
                <div id="reviewHeader">Wanna Write a Review?</div>
              </Link>
            </li>
            <li>
              {" "}
              <Link to={{ pathname: "/search" }}>
                <div id="searchHeader">Search Movie</div>
              </Link>
            </li>
          </ul>

          <div id="movieSearchApp">Movie Search App</div>
        </nav>
        <Switch>
          <Route component={Search} exact path="/search" />
          <Route component={Review} exact path="/review" />
        </Switch>
      </div>
    </Router>
  );
};
export default Navbar;
