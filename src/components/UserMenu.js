import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "redux/auth/authOperations";
import { getUserName } from "redux/auth/authSelectors";

function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const onLogOutClick = () => dispatch(logOutUser());

  return (
    <div>
      <ul
        className="list"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "10px",
        }}
      >
        {/* <li
          style={{
            marginRight: "10px",
          }}
        >
          <NavLink to="/contacts" className="link">
            Contacts
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/user-account" className="link">
            <Avatar alt="" sx={{ bgcolor: "background.light" }}>
              {userName.at()}
            </Avatar>
          </NavLink>
        </li>
        <li>
          <button type="button" onClick={onLogOutClick}>
            Log out
          </button>
          {/* <NavLink to="/login" className="link" onClick={onLogOutClick}>
            Log out
          </NavLink> */}
        </li>
      </ul>
    </div>
  );
}

export { UserMenu };
