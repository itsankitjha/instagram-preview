import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

const ApiHandler = () => {
  const [finalData, setfinalData] = useState();
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json"
    ).then((res) => res.json())
  );
  let dataa = data;
  return { isLoading, error, data };
};

export default ApiHandler;
