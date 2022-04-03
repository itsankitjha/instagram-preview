import {
  Box,
  createTheme,
  Grid,
  Paper,
  styled,
  ThemeProvider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide/index";
import { requestApi } from "./config/apiHandler";
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
  const [Loading, setLoading] = useState(false);
  const [Data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await requestApi("/", "GET");
      if (data) {
        setData(data);
        setLoading(false);
      }
    };

    // call the function

    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Box sx={{ flexGrow: 1 }} mt={3}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={4}>
            <Item>
              <LeftSide />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=6</Item>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
