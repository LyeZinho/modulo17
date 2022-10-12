import React from "react";

function Text(props) {
  return (
    <div>
      <h1 className="" >{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}