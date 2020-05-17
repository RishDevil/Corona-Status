import React from "react";
const cen = {
  padding: "10px",
  textAlign: "center",
  color: "red",
  fontWeight: "bold",
};

function Board(props) {
  return (
    <div>
      <h1 style={cen}>{props.text}</h1>
    </div>
  );
}
export default Board;
