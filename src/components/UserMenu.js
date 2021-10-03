import { useDispatch, useSelector } from "react-redux";
import { Avatar, IconButton } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { logOutUser } from "redux/auth/authOperations";
import { getUserName } from "redux/auth/authSelectors";
import NavList from "./NavList";
import NavItem from "./NavItem";
import NavLinkRouter from "./NavLinkRouter";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const onLogOutClick = () => dispatch(logOutUser());

  return (
    <>
      <NavList className="list">
        <NavItem>
          <NavLinkRouter to="/user-account" className="link">
            <Avatar alt="" sx={{ bgcolor: "background.light" }}>
              {userName.at()}
            </Avatar>
          </NavLinkRouter>
        </NavItem>
        <NavItem>
          <IconButton aria-label="Log out" onClick={onLogOutClick}>
            <ExitToAppIcon />
          </IconButton>
        </NavItem>
      </NavList>
    </>
  );
}
