import {
  AppBar,
  Backdrop,
  Button,
  Container,
  ThemeProvider,
} from "@mui/material";
import { useEffect } from "react";
import Appbar from "./components/appbar";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "React Material UI -Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Appbar></Appbar>
        <Button variant="contained">test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
