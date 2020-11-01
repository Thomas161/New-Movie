import React, { Component } from "react";
import Search from "../src/components/Search";
import Review from "../src/components/Review";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import MovieCard from "../src/components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/search" component={Search} />
              <Route exact path="/review" component={Review} />
              <Route exact path="/submitted" component={MovieCard} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}
export default App;
