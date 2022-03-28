import React from "react";
import Item from "./Item";
import ReactLoading from "react-loading";

const ItemList = ({ items, loading, entity }) => {
  if (loading) {
    return (
      <div className="loading">
        <ReactLoading type="bubbles" color="#3c3c3c" />
        <h2>Loading</h2>
      </div>
    );
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Item item={item} loading={loading} entity={entity} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
