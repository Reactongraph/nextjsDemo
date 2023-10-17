"use client";

import { useState } from "react";
import { FormControl, Checkbox, Alert, Link, Button } from "@mui/material";
import {
  Heading,
  Wrapper,
  MainButton,
  LeftGrid,
  MainGrid,
  Paragraph,
  Labels,
  EmailFieldGrid,
  PasswordFieldGrid,
  CheckField,
  LinkField,
  TextField1,
  ShowButton,
  LinkGrid,
  TextField2,
  GitButton,
} from "../../styles/loginformstyle";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import GitHubIcon from "@mui/icons-material/GitHub";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function LoginForm() {
  const { data: session, status } = useSession();
  // console.log("session", session);

  const router = useRouter();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailInput) {
      setFormValid("Please enter an Email address");
      return;
    }
    if (!passwordInput) {
      setFormValid("Please enter Password");
      return;
    }
    if (emailError || !emailInput) {
      setFormValid("Email is invalid. Please Re-Enter");
      return;
    }
    if (passwordError || !passwordInput) {
      setFormValid("Password is set to 5-20 Characters. Please Re-Enter");
      return;
    }

    const res = await signIn("Sign in", {
      redirect: false,
      email: emailInput,
      password: passwordInput,
    });

    if (!res.error) {
      window.location.href("/landing");
    }
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
            Welcome Back! please log in to access your account
          </Paragraph>
        </Heading>
        <Wrapper>
          <Labels htmlFor="standard-adornment-password">Email address*</Labels>
          <FormControl sx={{ width: "100%" }}>
            <EmailFieldGrid>
              <TextField1
                required
                type="email"
                id="standard-adornment-password"
                placeholder="Enter email address"
                variant="outlined"
                value={emailInput}
                error={emailError}
                onBlur={handleEmail}
                onChange={(event) => setEmailInput(event.target.value)}
              ></TextField1>
            </EmailFieldGrid>
          </FormControl>
          <Labels htmlFor="standard-adornment-password">Password*</Labels>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <PasswordFieldGrid>
              <TextField2
                value={passwordInput}
                placeholder="Enter Password"
                error={passwordError}
                onBlur={handlePassword}
                onChange={(event) => setPasswordInput(event.target.value)}
                required
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <ShowButton
                    type="text"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    show
                  </ShowButton>
                }
              />
            </PasswordFieldGrid>
          </FormControl>
          <LinkGrid>
            <CheckField>
              <Checkbox />
              Remember Me
            </CheckField>
            <LinkField href="/" underline="none">
              Forgot Password?
            </LinkField>
          </LinkGrid>
          <Link href="/landing">
            <MainButton onClick={handleSubmit} variant="contained" fullWidth>
              Login
            </MainButton>
          </Link>

          <p>{formValid && <Alert severity="error">{formValid}</Alert>}</p>
        </Wrapper>
        <GitButton type="button" onClick={() => signIn("github")}>
          <GitHubIcon />
          Login With GitHub
        </GitButton>
      </LeftGrid>
    </MainGrid>
  );
}
