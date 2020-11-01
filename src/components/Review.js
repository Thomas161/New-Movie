import React, { Component } from "react";
import MovieCard from "./MovieCard";
import ls from "local-storage";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import fire from "../backend/fire";
import "../css/Review.css";
// import { database } from "firebase";

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

    //all children added once form submitted
    fire
      .database()
      .ref("newReviews")
      .on("child_added", function (snapshot, prevChildKey) {
        let newPost = snapshot.val();
        console.log("Publisher :" + newPost.publisher);
        console.log("Body :" + newPost.body);
        console.log("ID :" + prevChildKey);
      });
    event.target.reset();
  };

  render() {
    const { publisher, body, submitted } = this.state;

    return (
      <Router>
        <>
          <div id="formContainerReview">
            <form onSubmit={this.handleSubmit} id="formControl">
              <input
                id="inputTitle"
                type="text"
                placeholder="Title"
                name="publisher"
                onChange={this.handleChange}
              />

              <textarea
                id="inputReviewBody"
                placeholder="Review..."
                name="body"
                onChange={this.handleChange}
              ></textarea>

              <input
                id="submitReview"
                type="submit"
                value="Submit"
                disabled={!this.isFilled()}
              />
            </form>
          </div>

          {submitted && <MovieCard publisher={publisher} body={body} />}
        </>
      </Router>
    );
  }
}
export default Review;
