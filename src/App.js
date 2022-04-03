import {
  Box,
  createTheme,
  Grid,
  Paper,
  styled,
  ThemeProvider,
} from "@mui/material";
import React from "react";
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
