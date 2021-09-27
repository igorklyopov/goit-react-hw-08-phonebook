import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { loginUser } from "redux/auth/authOperations";

function LoginForm() {
  const dispatch = useDispatch();

  const initialAuthValues = {
    email: "",
    password: "",
    showPassword: false,
  };

  const [authValues, setAuthValues] = useState(initialAuthValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userCredentials = {
      email: authValues.email,
      password: authValues.password,
    };

    setAuthValues(initialAuthValues);

    dispatch(loginUser(userCredentials));
  };

  const handleChange = (prop) => (event) => {
    setAuthValues({ ...authValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setAuthValues({
      ...authValues,
      showPassword: !authValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="div" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="dense"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={authValues.email}
            autoComplete="email"
            autoFocus
            onChange={handleChange("email")}
          />
          <FormControl variant="outlined" fullWidth margin="dense">
            <InputLabel htmlFor="password">Password *</InputLabel>
            <OutlinedInput
              id="password"
              name="password"
              type={authValues.showPassword ? "text" : "password"}
              value={authValues.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {authValues.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export { LoginForm };
