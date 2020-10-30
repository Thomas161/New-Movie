import React, { Component } from "react";
import Search from "../src/components/Search";
import Review from "../src/components/Review";
import Navbar from "../src/components/Navbar";
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
              <Route path="/review" component={Review} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
export default App;
