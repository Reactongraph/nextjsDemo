"use client";

import { MainDiv } from "@/styles/loginstylecomponent";
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
