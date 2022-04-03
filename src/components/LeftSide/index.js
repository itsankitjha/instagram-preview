import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ImageCard from "../ImageCard";
const LeftSide = (props) => {
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState(false);
  const handleClick = (image, likes, timestamp) => {
    props.handleClick(image, likes, timestamp);
  };
  const handleSorting = () => {
    data.sort((a, b) => {
      return a.likes - b.likes;
    });
    setUpdate(!update);
  };
  React.useEffect(() => {
    setData(props.data);
  }, []);

  return (
    <div
      style={{
        height: "90vh",

        overflow: "scroll",
      }}
    >
      <Box
        sx={{
          width: "100%",

          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          sx={{ color: "black", marginBottom: "10px", alignSelf: "right" }}
          onClick={handleSorting}
          align={"left"}
        >
          Sort by likes
        </Button>{" "}
      </Box>
      {data
        ? data.map((item, i) => {
            return (
              <ImageCard
                image={item.Image}
                likes={item.likes}
                timestamp={item.timestamp}
                handleClick={handleClick}
                component={"left"}
                key={i}
              />
            );
          })
        : "Loading..."}
    </div>
  );
};

export default LeftSide;
