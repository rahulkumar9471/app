import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { books } from "./books.js";
import Book from "./Book.js";

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      {books.map((book,index) => {
        const { id, img, name, address } = book;
        return <Book key={book.id} {...book} getBook={getBook} number={index} />;
      })}
    </section>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
