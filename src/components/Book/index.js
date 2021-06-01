import React from "react";
import "./Book.css";

const Book = ({ book }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
        />
      </div>
      <div className="card__title">{book.volumeInfo.title}</div>
      <div className="card__authors">{book.volumeInfo.authors}</div>
      <div className="card_description">{book.volumeInfo.description}</div>
    </div>
  );
};

export default Book;
