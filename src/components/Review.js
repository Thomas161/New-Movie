import React, { Component } from "react";
import MovieCard from "./MovieCard";
import ls from "local-storage";
import { Link, BrowserRouter as Router } from "react-router-dom";
import fire from "../backend/fire";
import "../css/Review.css";
// import Search from "./Search";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publisher: "",
      body: "",
      submitted: false,
    };
  }

  componentWillMount() {
    //creates a variable with a database collection i.e. ('newReviews');
    fire.database().ref("newReviews").orderByKey();
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isFilled = () => {
    return this.state.body !== "" && this.state.publisher !== "";
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      publisher: this.state.publisher,
      body: this.state.body,
      submitted: true,
    });

    //set key and value pairs into localstorage
    ls.set("publisher", JSON.stringify(this.state.publisher));
    ls.set("body", JSON.stringify(this.state.body));

    //setting up firebase to push new state objects into collection
    fire.database().ref("newReviews").push().set({
      publisher: this.state.publisher,
      body: this.state.body,
    });

    console.log("Submitted to firebase", this.state.publisher, this.state.body);
  };

  // hideComp = e => {
  //   e.preventDefault();
  //   this.setState({
  //     hideComp:true
  //   })
  // }

  render() {
    const { publisher, body, submitted } = this.state;

    return (
      <Router>
        {/* <Search style="display:none" /> */}
        <>
          <div>
            <br />
            <form onSubmit={this.handleSubmit}>
              <div className="form-group has-error has-feedback">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Title"
                  name="publisher"
                  onChange={this.handleChange}
                />
                <br />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Review..."
                  name="body"
                  onChange={this.handleChange}
                />
                <br />
                <span>
                  <input
                    type="submit"
                    className="btn btn-warning"
                    value="Submit"
                    disabled={!this.isFilled()}
                  />
                  <br />

                  <Link
                    to={{ pathname: "/" }}
                    alt="home"
                    style={{
                      fontSize: "12px",
                      fontWeight: "lighter",
                      backgroundColor: "#4c9f93",
                      padding: "5px",
                      border: "solid 3px red",
                      color: "white",
                    }}
                  >
                    RETURN TO HOME
                  </Link>
                </span>
              </div>
            </form>
          </div>
          {submitted && <MovieCard publisher={publisher} body={body} />}
        </>
      </Router>
    );
  }
}
export default Review;
