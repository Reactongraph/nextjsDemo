"use client";

import React from "react";
import { Layout, LandingScreen } from "../component/Layout";
import { LandingPageMain } from "./LandingStyle";

export default function page() {
  return (
    <LandingPageMain>
      <Layout />
      <LandingScreen />
    </LandingPageMain>
  );
}
