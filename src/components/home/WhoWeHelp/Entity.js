import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Pagination from "./Pagination";

const Entity = ({ entity, entries }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        if (resp.ok === true) return resp.json();
        else console.log("Error fetching");
      })
      .then((json) => {
        setItems(json.slice(entries[0], entries[1]));
      });
  }, []);

  useEffect(() => {
    if (items.length !== 0) {
      console.log(items);
      setLoading(false);
    }
  }, [items]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <ItemList items={currentPosts} loading={loading} entity={entity} />
      <Pagination
        itemsPerPage={postsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Entity;
