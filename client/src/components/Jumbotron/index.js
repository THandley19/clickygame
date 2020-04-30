import React from "react";
import "../Jumbotron/style.css";

function Jumbotron(props) {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 className="header-text">{props.title}</h1>

        <h2>{props.message}</h2>
        <h2>Current Score: {props.userScore}</h2>
        <h2>Top Score: {props.highScore}</h2>
      </div>
    </div>
  );
}

export default Jumbotron;
