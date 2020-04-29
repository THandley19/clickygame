import React from "react";
import "../Cards/style.css";

const Cards = (props) => {
  return (
    <div
      className="card"
      value={props.id}
      onClick={() => props.handleSelectedItem(props.name)}
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
};

export default Cards;
