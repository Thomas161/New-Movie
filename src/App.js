import React, { Component } from "react";
import Search from "../src/components/Search";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <>
        <div>
          {/* 1 uncoupled components */}
          <Search />
        </div>
      </>
    );
  }
}
export default App;
