"use client";

import React from "react";
import Layout from "../component/Layout";
import { LandingPageMain } from "./LandingStyle";
import LandingScreen from "../component/LandingScreen";

export default function page() {
  return (
    <LandingPageMain>
      <Layout />
      <LandingScreen />
    </LandingPageMain>
  );
}
