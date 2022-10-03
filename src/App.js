import { Backdrop, Button } from "@mui/material";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "React Material UI -Home";
  }, []);
  return (
    <container
      maxWidth="xl"
      sx={{
        background: "#fff",
      }}
    >
      <Button>test</Button>
    </container>
  );
}

export default App;
