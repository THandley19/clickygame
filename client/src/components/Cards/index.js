import React from "react";
import "../Cards/style.css";

const Cards = (props) => {
  return (
    <div
      className="card"
      key={props.id}
      onClick={() => props.handleSelectedItem(props.id, props.clicked)}
    >
      <div className="img-container">
        <img
          id={props.name}
          alt={props.name}
          src={props.image}
          clicked={props.clicked}
        />
      </div>
    </div>
  );
};

export default Cards;
