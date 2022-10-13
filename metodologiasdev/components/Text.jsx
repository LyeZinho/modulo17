import React from "react";
import Image from "next/image";

function Text(props) {
  return (
    <div>
      if (props.orientation === "left") {
        <h1>
          <Image
            src={props.image == null || props.image == "" ? "" : props.image}
            alt={props.alt}
            width={props.width}
            height={props.height}
          />
        </h1> 
      }
    </div>
  );
}