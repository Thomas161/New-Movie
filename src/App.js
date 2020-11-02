import React, { Component } from "react";
import Search from "../src/components/Search";
import Review from "../src/components/Review";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import FacebookLogin from "../src/components/FacebookLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <FacebookLogin />
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
