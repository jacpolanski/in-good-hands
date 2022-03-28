import React from "react";

function Item({ item, loading, entity }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div className="entity-text_wrapper">
        <div className="entity-text">
          <div className="entity-text_name">
            {entity} "{item.title.slice(0, 10)}"
          </div>
          <div className="entity-text_description">
            {item.body.slice(0, 50)}
          </div>
        </div>
        <div className="entity-text_items">
          {item.body.slice(-50, item.body.length).replace(/ /g, ", ")}
        </div>
      </div>
      <div className="item-decor-line" />
    </div>
  );
}

export default Item;
