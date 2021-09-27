import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

function AuthNav() {
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
        <li
          style={{
            marginRight: "10px",
          }}
        >
          <NavLink to="/login" className="link">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="link">
            Sign up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export { AuthNav };
