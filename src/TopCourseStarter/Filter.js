import React from "react";
import './Styli.css';

const Filter = ({ filterdata }) => {
  return (
    <div>
      {filterdata.map((data) => (
        <button key={data.id}>
          {data.title}
        </button>
      ))}
    </div>
  );
}

export default Filter;
