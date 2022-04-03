import {
  Box,
  createTheme,
  Divider,
  Grid,
  Paper,
  Skeleton,
  styled,
  ThemeProvider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide/index";
import { globalTheme } from "./style/theme";

const theme = createTheme(globalTheme);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  alignItems: "center",

  color: theme.palette.text.secondary,
}));

function App() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json"
    ).then((res) => res.json())
  );

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Box sx={{ flexGrow: 1 }} mt={2}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={4}>
            <Item
              sx={{
                // height: "100vh",
                backgroundColor: "rgba(250,250,250,255)",
              }}
            >
              {isLoading ? (
                <>
                  <Skeleton variant="rectangular" height={100} />;
                  <Skeleton variant="rectangular" height={100} />;
                  <Skeleton variant="rectangular" height={100} />;
                  <Skeleton variant="rectangular" height={100} />;
                  <Skeleton variant="rectangular" height={100} />;
                  <Skeleton variant="rectangular" height={100} />;
                  <Skeleton variant="rectangular" height={100} />;
                </>
              ) : (
                <LeftSide mt={2} data={data} />
              )}
              <Divider mt={2} />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item
              sx={{ height: "100vh", backgroundColor: "rgba(250,250,250,255)" }}
            >
              xs=6
            </Item>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
