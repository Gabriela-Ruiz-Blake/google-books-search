import React from "react";

function Search() {
  return (
    <div className="input-group col-12">
      <input
        className="form-control py-2 border-right-0 border"
        type="search"
        placeholder="Search Book"
        id="searchbar"
      />
      <span className="input-group-append">
        <button
          className="btn btn-outline-secondary border-left-0 border"
          type="button"
        >
          <i className="fa fa-search" />
        </button>
      </span>

      <div className="col-12">
        <button
          type="submit"
          className="btn btn-secondary"
          id="searchbutton"
          onClick={event => props.searchBooks(event)}
        >
          Search Books
        </button>
      </div>
    </div>
  );
}

export default Search;
