import { lazy, Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import "@fontsource/oswald/300.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/700.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./common/theme";
import { GlobalStyles } from "@mui/material";

import { GlobalCSS } from "../src/common/GlobalCss";
import { PrivateRoute } from "components/PrivateRoute";
import { PublicRoute } from "components/PublicRoute";
import { getCurrentUser } from "redux/auth/authOperations";
import { getIsChecksCurrentUser } from "redux/auth/authSelectors";
import Loader from "components/Loader";

const HomePage = lazy(() =>
  import("../src/pages/HomePage" /* webpackChunkName: "home-page" */)
);
const ContactsPage = lazy(() =>
  import("pages/ContactsPage" /* webpackChunkName: "contacts-page" */)
);
const LoginPage = lazy(() =>
  import("../src/pages/LoginPage" /* webpackChunkName: "login-page" */)
);
const SignUpPage = lazy(() =>
  import("../src/pages/SignUpPage" /* webpackChunkName: "signup-page" */)
);
const UserAccountPage = lazy(() =>
  import("pages/UserAccountPage" /* webpackChunkName: "user-account-page" */)
);

function App() {
  const dispatch = useDispatch();
  const isChecksCurrentUser = useSelector(getIsChecksCurrentUser);
  console.log(isChecksCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={GlobalCSS} />
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          {isChecksCurrentUser ? (
            <Loader />
          ) : (
            <>
              <Switch>
                <PublicRoute path="/" redirectTo="/contacts" restricted exact>
                  <HomePage />
                </PublicRoute>
                <PrivateRoute path="/contacts" exact>
                  <ContactsPage />
                </PrivateRoute>
                <PublicRoute
                  path="/login"
                  redirectTo="/contacts"
                  restricted
                  exact
                >
                  <LoginPage />
                </PublicRoute>
                <PublicRoute path="/register" restricted exact>
                  <SignUpPage />
                </PublicRoute>
                <PrivateRoute path="/user-account" exact>
                  <UserAccountPage />
                </PrivateRoute>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </>
          )}
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
