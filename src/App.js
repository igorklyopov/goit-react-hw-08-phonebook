import { lazy, Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CssBaseline } from "@mui/material";
import "@fontsource/oswald/300.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/700.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./common/theme";
import { GlobalStyles } from "@mui/material";

import { HomePage } from "../src/pages/HomePage";
import { ContactsPage } from "../src/pages/ContactsPage";
import { LoginPage } from "../src/pages/LoginPage";
import { SignUpPage } from "../src/pages/SignUpPage";
import Loader from "components/Loader";
import { GlobalCSS } from "../src/common/GlobalCss";
import { UserAccountPage } from "pages/UserAccountPage";
import { getCurrentUser } from "redux/auth/authOperations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={GlobalCSS} />
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/contacts" exact>
              <ContactsPage />
            </Route>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
            <Route path="/signup" exact>
              <SignUpPage />
            </Route>

            <Route path="/user-account">
              <UserAccountPage />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
