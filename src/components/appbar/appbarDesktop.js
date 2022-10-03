import { ListItemText } from "@mui/material";
import { AppBarContainer, AppbarHeader, Mylist } from "../../styles/appbar";

export default function AppbarDesktop({ matches }) {
  return (
    <AppBarContainer>
      <AppbarHeader>My Bags</AppbarHeader>
      <Mylist type="row">
        <ListItemText primary="home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
      </Mylist>
    </AppBarContainer>
  );
}
