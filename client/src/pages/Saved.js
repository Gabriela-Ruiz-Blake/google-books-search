import React, { Component } from "react";
import API from "../utils/API";
import Saved from "../components/saved";

class SaveBooks extends Component {
  state = {
    results: []
  };

  getBooks = () => {
    API.getBooks()
      .then(data => {
        return this.setState({ results: data.data });
      })
      .catch(err => console.log(err));
  };

  removeBook = id => {
    API.deleteBook(id)
      .then(() => {
        this.getBooks();
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <div>
        <h1 className="text-white">React Google Book Search</h1>
        <h2 className="text-white">Your Saved Books</h2>

        <Saved saved={this.state.results} removeBook={this.removeBook} />
      </div>
    );
  }
}

export default SaveBooks;
