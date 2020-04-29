import React from "react";

const Alert = (props) => {
  return (
    <div>
      {props.message ? (
        <h3>{props.message}</h3>
      ) : (
        <h3>Select a team to begin!</h3>
      )}
    </div>
  );
};

export default Alert;
