import React, { useState, useEffect } from "react";
import "./Discover.css";

const Discover = () => {
  const [query, setQuery] = useState();
  const [queried, setQueried] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!queried) {
      return;
    }
    window
      .fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          query
        )}`
      )
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.items);
      });
  }, [queried, query]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.search.value);
    setQueried(true);
  };
  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input type="search" id="search" />
      </form>
      <div>
        {data?.map((book) => {
          return <div key={book.id}>{book.volumeInfo.title}</div>;
        })}
      </div>
    </div>
  );
};

export default Discover;
