import React from "react";
import ImageCard from "../ImageCard";
const LeftSide = (props) => {
  return (
    <div>
      {" "}
      {props.data.map((item, i) => {
        return (
          <ImageCard
            image={item.Image}
            likes={item.likes}
            timestamp={item.timestamp}
          />
        );
      })}
    </div>
  );
};

export default LeftSide;
