import { List, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { Box } from "@mui/system";
import "@fontsource/montez";
import { Colors } from "../theme";
// container
export const AppBarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

// header
export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: '"montez","cursive"',
  color: Colors.secondary,
}));

export const Mylist = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));
