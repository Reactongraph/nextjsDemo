"use client";

import {
  Button,
  Link,
  FilledInput,
  FormControl,
  Checkbox,
} from "@mui/material";
import {
  Heading,
  MainDiv,
  Wrapper,
  MainButton,
} from "../../styles/loginstylecomponent";
import { useState } from "react";
import { Alert } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function Login() {
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formValid, setFormValid] = useState();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError || !emailInput) {
      setFormValid("Email is invalid. Please Re-Enter");
      return;
    }
    if (passwordError || !passwordInput) {
      setFormValid("Password is set to 5-20 Characters. Please Re-Enter");
      return;
    }
    setFormValid(null);
    console.log(emailInput);
    console.log(passwordInput);
  };

  const handleEmail = () => {
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };

  const handlePassword = () => {
    if (
      !passwordInput ||
      passwordInput.length < 5 ||
      passwordInput.length > 20
    ) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  return (
    <MainDiv>
      <Heading>
        <h2>Welcome Back!</h2>
        <p>Welcome Back! please log in to access your account</p>
      </Heading>
      <Wrapper>
        <InputLabel htmlFor="standard-adornment-password">
          Email address*
        </InputLabel>
        <FormControl sx={{ m: 1, width: "35ch" }} variant="filled">
          <FilledInput
            required
            type="email"
            id="standard-adornment-password"
            placeholder="Enter email address"
            variant="outlined"
            value={emailInput}
            error={emailError}
            onBlur={handleEmail}
            onChange={(event) => setEmailInput(event.target.value)}
          ></FilledInput>
        </FormControl>
        <br />
        <br />
        <InputLabel htmlFor="standard-adornment-password">Password*</InputLabel>
        <FormControl sx={{ m: 1, width: "26ch" }} variant="filled">
          <FilledInput
            style={{ width: "9.2cm" }}
            value={passwordInput}
            placeholder="Enter Password"
            error={passwordError}
            onBlur={handlePassword}
            onChange={(event) => setPasswordInput(event.target.value)}
            required
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <Button
                type="text"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                style={{ color: "black" }}
              >
                show
              </Button>
            }
          />
        </FormControl>
        <InputLabel style={{ width: "5cm" }}>
          <Checkbox defaultChecked size="small" />
          Remember Me
        </InputLabel>
        <Link
          href="/"
          underline="none"
          style={{ float: "right", marginTop: "-30px" }}
        >
          Forgot Password?
        </Link>
        <MainButton onClick={handleSubmit} variant="contained" fullWidth>
          Login
        </MainButton>
        <p>{formValid && <Alert severity="error">{formValid}</Alert>}</p>
      </Wrapper>
    </MainDiv>
  );
}
