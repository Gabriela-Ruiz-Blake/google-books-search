import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/search";
import Results from "../components/results";

class SearchBooks extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

  searchBooks = event => {
    event.preventDefault();
    let searchTerm = document.getElementById("searchbar").value;
    API.getGoogleBookSearch(searchTerm)
      .then(res => {
        let results = res.data.items;
        results = results.map(result => {
          let book = {
            id: result.id,
            title: result.volumeInfo.title,
            authors: result.volumeInfo.authors,
            image: result.volumeInfo.imageLinks.thumbnail,
            description: result.volumeInfo.description,
            link: result.volumeInfo.infoLink
          };
          return book;
        });
        this.setState({ results: results });
      })
      .catch(err => console.log(err));
  };

  saveBook = event => {
    event.preventDefault();
    let bookSaveChoice = this.state.results.filter(
      book => book.id === event.target.id
    );
    bookSaveChoice = bookSaveChoice[0];
    API.saveBook(bookSaveChoice)
      .then(console.log(bookSaveChoice))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-white">React Google Book Search</h1>
        <h2 className="text-white">Search for &amp; Save Books of Interst</h2>

        <Search searchBooks={this.searchBooks} />
        <Results results={this.state.results} saveBook={this.saveBook} />
      </div>
    );
  }
}

export default SearchBooks;
