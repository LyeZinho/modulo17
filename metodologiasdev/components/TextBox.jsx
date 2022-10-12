import React from "react";

//Component for render a text box

function TextBox(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input type="text" />
    </div>
  );
}