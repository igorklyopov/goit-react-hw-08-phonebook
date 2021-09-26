import { CssBaseline } from "@mui/material";
import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./common/theme";
import "@fontsource/oswald/300.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/700.css";

import { HomePage } from "../src/pages/HomePage";
import { ContactsPage } from "../src/pages/ContactsPage";
import { LoginPage } from "../src/pages/LoginPage";
import { SignUpPage } from "../src/pages/SignUpPage";
import Loader from "components/Loader";
import { GlobalStyles } from "@mui/material";
import { GlobalCSS } from "../src/common/GlobalCss";

function App() {
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
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
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
