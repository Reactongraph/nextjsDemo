"use client";

import { TextField } from "@mui/material";
import {
  H3,
  MainDiv,
  Wrapper,
  MainButton,
} from "../../styles/loginstylecomponent";
import { Paper } from "@mui/material";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailInput);
    console.log(passwordInput);
  };

  return (
    <MainDiv>
      <Paper>
        <H3>
          <h3>Welcome Back!</h3>
          <p>Welcome Back! please log in to access your account</p>
        </H3>
        <Wrapper>
          <InputLabel htmlFor="standard-adornment-password">
            Email address*
          </InputLabel>
          <TextField
            fullWidth
            required
            type="email"
            placeholder="Enter email address"
            variant="outlined"
            value={emailInput}
            onChange={(event) => setEmailInput(event.target.value)}
          ></TextField>
          <br />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password*
            </InputLabel>
            <Input
              id="standard-adornment-password"
              variant="outlined"
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
              required
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
          &nbsp;
          <a href="#" underline="none">
            Forgot Password?
          </a>
          <br />
          <MainButton onClick={handleSubmit}>Login</MainButton>
        </Wrapper>
      </Paper>
    </MainDiv>
  );
}
