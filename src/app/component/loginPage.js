"use client";

import { MainDiv } from "@/styles/loginsidebarstyle";
import LoginForm from "./loginform";
import LoginSidebar from "./loginsidebar";

export default function LoginPage() {
  return (
    <MainDiv>
      <LoginForm />
      <LoginSidebar />
    </MainDiv>
  );
}
