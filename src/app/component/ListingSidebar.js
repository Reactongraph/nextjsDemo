"use client";
import React from "react";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  ListingSidebarMain,
  SidebarHeadingGrid,
  ClearButton,
  H4,
  H5,
  InputStyle,
  TextFieldStyle,
} from "../listing/ListingStyle";

export default function ListingSidebar() {
  return (
    <ListingSidebarMain>
      <Grid>
        <SidebarHeadingGrid>
          <H4>Filter</H4>
          <ClearButton color="error">Clear All</ClearButton>
        </SidebarHeadingGrid>
        <H4>Terms</H4>
        <InputStyle>Include these terms</InputStyle>
        <TextFieldStyle placeholder="Type any term"></TextFieldStyle>
        <InputStyle>Exclude these terms</InputStyle>
        <TextFieldStyle placeholder="Type any term"></TextFieldStyle>
        <H4>Operating Model</H4>
        <H5>Industry</H5>
        <InputStyle>Include</InputStyle>
        <TextFieldStyle placeholder="Type and search"></TextFieldStyle>
        <InputStyle>Exclude</InputStyle>
        <TextFieldStyle placeholder="Type and search"></TextFieldStyle>
      </Grid>
    </ListingSidebarMain>
  );
}
