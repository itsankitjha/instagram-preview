import React from "react";
import ImageCard from "../ImageCard";

const RIghtSide = ({ data }) => {
  return (
    <div>
      <ImageCard
        image={data.image}
        likes={data.likes}
        timestamp={data.timestamp}
        component={"right"}
      />
    </div>
  );
};

export default RIghtSide;
