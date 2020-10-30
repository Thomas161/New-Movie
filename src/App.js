import React, { Component } from "react";
import Search from "../src/components/Search";
import Review from "../src/components/Review";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <div>
          {/* 1 uncoupled components */}
          <Switch>
            <Route component={Search} exact path="/search" />
            <Route component={Review} path="/review" />
          </Switch>
        </div>
      </>
    );
  }
}
export default App;
