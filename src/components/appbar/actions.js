import { Favorite, Person, ShoppingCart } from "@mui/icons-material";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { Mylist } from "../../styles/appbar";

export default function Actions({ matches }) {
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
