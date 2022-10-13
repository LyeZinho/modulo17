import React from "react";
import Image from "next/image";

function ContentBox(props) {
  return (
    <div>
      if (props.orientation === "left") {
        <div>
          <div>
          <Image
            src={props.image == null || props.image == "" ? "" : props.image}
            alt={props.alt}
            width={props.width}
            height={props.height} 
          />
        </div>
        <div>
          <h1>
            {props.title == null || props.title == "" ? "" : props.title}
          </h1>
          <br />
          <p>{props.text}</p>
        </div> 
      </div>
      }
      else {
        <div>
          <div>
            <Image
              src={props.image == null || props.image == "" ? "" : props.image}
              alt={props.alt}
              width={props.width}
              height={props.height} 
            />
          </div>
          <div>
            <h1>
              {props.title == null || props.title == "" ? "" : props.title}
            </h1>
            <br />
            <p>{props.text}</p>
          </div> 
        </div>
      }
    </div>
  );
}

export default ContentBox;