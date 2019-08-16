import React from "react";
import "./style.css";

function SavedCard(props) {
  return (
    <div className="SavedCard row" id={props.id + "Card"}>
      <div className="ImageDiv col-2">
        <img src={props.image} alt={"Image of" + props.title} />
      </div>
      <div className="InfoDiv col-9">
        <div className="row">
          <h2 className="col-8">{props.title}</h2>
          <h3 className="col-4">{props.author}</h3>
        </div>
        <p className="SavedDescription">{props.description}</p>
      </div>
    </div>
  );
}

function SavedBooks(props) {
  return props.saved.length === 0 ? (
    <div id="SavedBooks">
      <h1> 0 Saved Results </h1>
    </div>
  ) : (
    <div id="SavedBooks">
      <h1> Saved Books </h1>
      {props.saved.map(book => {
        return (
          <SavedCard
            key={book._id}
            id={book._id}
            image={book.image}
            title={book.title}
            author={book.authors}
            description={book.description}
            link={book.link}
            deleteBook={props.removeBook}
          />
        );
      })}
    </div>
  );
}

export default SavedBooks;
