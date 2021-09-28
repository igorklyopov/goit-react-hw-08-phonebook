import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getIsLoggedIn } from "redux/auth/authSelectors";

function PublicRoute({ children, restricted = false, routeProps }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/user-account" /> : children}
    </Route>
  );
}

export { PublicRoute };
