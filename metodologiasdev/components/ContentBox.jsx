import React from "react";
import Image from "next/image";

function PlaceholderLoader({ src, width }){
  return `https://picsum.photos/${src}/${width}`
}

function ContentBoxFactory(props)
{
  switch (props.orientation) {
    case "left":
      return (
        <div>
          <div>
            <Image 
            src={props.image ? props.image : PlaceholderLoader({src: 200, width: 300})}
            alt="/"
            width="200"
            height="300"
            />
          </div>
          <div>
            <h1>{props.title}</h1>
            <h7>{props.text}</h7>
          </div>
        </div>
      );
    case "right":
      return (
        <div>
          <div>
            <h1>{props.title}</h1>
            <h7>{props.text}</h7>
          </div>
          <div>
            <Image 
            //If props.image is whitespace or null use placeholder image: https://picsum.photos/200/300
            src={props.image ? props.image : PlaceholderLoader({src: 200, width: 300})}
            alt="/"
            width="200"
            height="300"
            />
          </div>
        </div>
      );
    default:
      return (
        <div>
          <div>
            <h1>{props.title}</h1>
            <h7>{props.text}</h7>
          </div>
          <div>
            <Image 
            //If props.image is whitespace or null use placeholder image: https://picsum.photos/200/300
            src={props.image ? props.image : PlaceholderLoader({src: 200, width: 300})}
            alt="/"
            width="200"
            height="300"
            />
          </div>
        </div>
      );
  }
}

function ContentBox(props) {
  return (
    ContentBoxFactory(props)
  )
}

export default ContentBox;
