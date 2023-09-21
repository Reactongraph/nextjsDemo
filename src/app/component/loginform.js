"use client";

import { useState } from "react";
import {
  Button,
  Link,
  FilledInput,
  FormControl,
  Checkbox,
  InputLabel,
  Alert,
} from "@mui/material";
import {
  Heading,
  Wrapper,
  MainButton,
  LeftGrid,
  MainGrid,
  Paragraph,
} from "../../styles/loginstylecomponent";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function LoginForm() {
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
    <MainGrid>
      <LeftGrid>
        <Heading>
          <h2>Welcome Back!</h2>
          <Paragraph>
            Welcome Back! please log in to access <br /> your account
          </Paragraph>
        </Heading>
        <Wrapper>
          <InputLabel htmlFor="standard-adornment-password" >
            Email address*
          </InputLabel>
          <FormControl sx={{ m: 1, width: "31ch" }} variant="filled">
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
          <InputLabel htmlFor="standard-adornment-password">
            Password*
          </InputLabel>
          <FormControl sx={{ m: 1, width: "31ch" }} variant="filled">
            <FilledInput
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
                  style={{ color: "black", fontSize:"10px" }}
                >
                  show
                </Button>
              }
            />
          </FormControl>
          <InputLabel style={{ width: "5cm", fontSize: "12px" }}>
            <Checkbox defaultChecked size="x-small" />
            Remember Me
          </InputLabel>
          <Link
            href="/"
            underline="none"
            style={{ float: "right", marginTop: "-25px", fontSize: "12px" }}
          >
            Forgot Password?
          </Link>
          <MainButton onClick={handleSubmit} variant="contained" fullWidth>
            Login
          </MainButton>
          <p>{formValid && <Alert severity="error">{formValid}</Alert>}</p>
        </Wrapper>
      </LeftGrid>
    </MainGrid>
  );
}
