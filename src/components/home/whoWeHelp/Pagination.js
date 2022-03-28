import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={pageNumbers.length === 1 ? "hide" : ""}>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={(e) => paginate(number, e)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
