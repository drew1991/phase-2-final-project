import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  AppBarContainer,
  AppbarHeader,
  Mylist,
} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDesktop({ matches }) {
  const Component = ActionIconsContainerDesktop;
  return (
    <Component>
      <AppBarContainer>
        <AppbarHeader>Universal pay</AppbarHeader>
        <Mylist type="row">
          <ListItemText primary="Home ðï¸" />
          <ListItemText primary="Categories" />
          <ListItemText primary="Products" />
          <ListItemText primary="Contact Usð" />
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon></SearchIcon>
            </ListItemIcon>
          </ListItemButton>
        </Mylist>

        <Actions />
      </AppBarContainer>
    </Component>
  );
}
