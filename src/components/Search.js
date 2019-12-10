import React, { Component } from "react";
import Navbar from "./Navbar";
import SearchMovie from "./SearchMovie";
import "../css/Search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { API_KEY } from "../environment/config";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      movie: [],
      syn: [],
      vote: [],
      poster: [],
      searchTerms: ""
    };
  }

  //handleSubmit()
  handleSubmit = e => {
    e.preventDefault();
    const key = API_KEY;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.state.searchTerms}`
    )
      .then(data => data.json())
      .then(data => {
        // console.log(data);
        this.setState({
          movie: data.results[0].original_title,
          syn: data.results[0].overview,
          vote: data.results[0].vote_average,
          poster: data.results[0].poster_path,
          submitted: true
        });
      })
      .catch(error => {
        console.error("Error message ", error);
      });
  };

  //handleChange()
  handleChange = e => {
    e.preventDefault();
    this.setState({
      searchTerms: e.target.value
    });
  };

  render() {
    const { movie, syn, vote, poster, submitted } = this.state;
    return (
      <>
        <Navbar />
        <div>
          <form action="" onSubmit={this.handleSubmit}>
            <input
              placeholder="Select Movie..."
              type="text"
              onChange={this.handleChange}
            />

            <input
              type="submit"
              className="btn btn-primary"
              value="Search Movie"
            />
          </form>
          <br />
          <br />
        </div>
        {submitted && (
          <SearchMovie movie={movie} syn={syn} vote={vote} poster={poster} />
        )}
      </>
    );
  }
}

export default Search;
