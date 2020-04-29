import React from "react";
import "./style.css";

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li className="brand animated lightSpeedIn">
          <a href="/clicky-game/">{props.title}</a>
        </li>

        <li id="rw">{props.message}</li>

        <li>Current Score: {props.score}</li>

        <li>Top Score: {props.highScore}</li>
      </ul>
    </nav>
  );
};

export default Nav;
