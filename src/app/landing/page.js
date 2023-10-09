"use client";

import React from "react";
import Layout from "../component/Layout";
import LandingScreen from "../component/LandingScreen";
import { LandingPageMain } from "./LandingStyle";

export default function page() {
  return (
    <LandingPageMain>
      <Layout />
      <LandingScreen />
    </LandingPageMain>
  );
}
