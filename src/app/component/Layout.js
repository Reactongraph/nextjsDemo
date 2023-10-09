import React from "react";
import ListingSidebar from "./ListingSidebar";
import { Grid } from "@mui/material";
import LandingHeadingbar from "./LandingHeadingbar";
import LandingNavbar from "./LandingNavbar";

export default function Layout() {
  return (
    <Grid>
      <LandingNavbar />
      <LandingHeadingbar />
      <ListingSidebar />
    </Grid>
  );
}
