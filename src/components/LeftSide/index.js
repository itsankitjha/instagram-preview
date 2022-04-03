import React from "react";
import ImageCard from "../ImageCard";
const LeftSide = (props) => {
  const handleClick = (image, likes, timestamp) => {
    props.handleClick(image, likes, timestamp);
  };
  return (
    <div
      style={{
        height: "90vh",

        overflow: "scroll",
      }}
    >
      {" "}
      {props.data.map((item, i) => {
        return (
          <ImageCard
            image={item.Image}
            likes={item.likes}
            timestamp={item.timestamp}
            handleClick={handleClick}
            component={"left"}
          />
        );
      })}
    </div>
  );
};

export default LeftSide;
