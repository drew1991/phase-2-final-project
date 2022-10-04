import { Favorite, Person, ShoppingCart } from "@mui/icons-material";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  AppBarContainer,
  AppbarHeader,
  Mylist,
} from "../../styles/appbar";
// import {
//   ActionIconsContainerDesktop,
//   ActionIconsContainerMobile,
//   Mylist,
// } from "../../styles/appbar";

export default function Actions({ matches }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Mylist type="row">
      <ListItemButton
        sx={{
          justifycontent: "center",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ShoppingCart />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton
        sx={{
          justifycontent: "center",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Person />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />

      <ListItemButton
        sx={{
          justifycontent: "center",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Favorite />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
    </Mylist>
  );
}
