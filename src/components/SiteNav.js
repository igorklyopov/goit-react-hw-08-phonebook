import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

function SiteNav() {
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
          <NavLink to="/">
            <Typography variant="h6" component="h1">
              Phonebook
            </Typography>
          </NavLink>
        </li>
        <li
          style={{
            marginRight: "10px",
          }}
        >
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li
          style={{
            marginRight: "10px",
          }}
        >
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
      </ul>
    </Toolbar>
  );
}

export { SiteNav };
