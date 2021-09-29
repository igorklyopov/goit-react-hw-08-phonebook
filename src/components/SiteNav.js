import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSelectors";

function SiteNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Toolbar component="nav">
      <ul
        className="list"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "10px",
        }}
      >
        <li
          style={{
            marginRight: "10px",
          }}
        >
          <NavLink to="/" className="link">
            Phonebook
          </NavLink>
        </li>
        {isLoggedIn && (
          <li
            style={{
              marginRight: "10px",
            }}
          >
            <NavLink to="/contacts" className="link">
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </Toolbar>
  );
}

export { SiteNav };
