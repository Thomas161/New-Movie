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
          <ul>
            <li>
              <a href="https://www.themoviedb.org/">
                <img src={moviedb} alt="the movie db" />
              </a>
            </li>
            <hr />
            <li>
              <Link to="/review">
                <h2>Wanna Write a Review?</h2>
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/review" component={Review} />
        </Switch>
      </div>
    </Router>
  );
};
export default Navbar;
