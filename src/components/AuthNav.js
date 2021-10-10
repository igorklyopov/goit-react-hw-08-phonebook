import NavList from "./NavList";
import NavItem from "./NavItem";
import NavLinkRouter from "./NavLinkRouter";

export default function AuthNav() {
  return (
    <div>
      <NavList className="list">
        <NavItem>
          <NavLinkRouter to="/login" className="link">
            Log in
          </NavLinkRouter>
        </NavItem>
        <NavItem>
          <NavLinkRouter to="/register" className="link">
            Sign up
          </NavLinkRouter>
        </NavItem>
      </NavList>
    </div>
  );
}
