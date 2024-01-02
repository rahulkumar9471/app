import React from "react";

const Book = ({ img, name, address, getBook, id , number}) => {
  // const{img, name, address} = props.book;

  const getSingalBookId = () => {
    getBook(id);
  };

  return (
    <article className="book">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <h4>{address}</h4>
      <button onClick={() => getBook(id)}>Click Me</button>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};

export default Book;
