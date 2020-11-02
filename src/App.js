import React, { Component } from "react";
import Search from "./components/Search";
import Review from "./components/Review";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
            </Switch>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}
export default App;
