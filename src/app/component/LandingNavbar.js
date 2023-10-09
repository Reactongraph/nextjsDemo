"use client";

import * as React from "react";
import {
  Box,
  IconButton,
  Avatar,
  Tooltip,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from "@mui/material";
import Image from "next/image";
import {
  AppBarMain,
  SearchButton,
  AppBarInnerGrid,
  AppBarLeftGrid,
  AppBarRightGrid,
  AppBarExtendedGrid,
} from "../listing/ListingStyle";
import Toggle from "./Toggle.js";

export default function LandingNavbar() {
  return (
    <>
      <AppBarMain>
        <AppBarInnerGrid>
          <AppBarLeftGrid>
            <Image
              src="/images/ALphaSearch 1.png"
              alt="Logo"
              width={188}
              height={35}
            />
            <SearchButton>Search</SearchButton>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
              <InputLabel>Lists</InputLabel>
              <Select label="Lists"></Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
              <InputLabel>More</InputLabel>
              <Select label="More"></Select>
            </FormControl>
          </AppBarLeftGrid>
          <AppBarRightGrid>
            <Box>
              <Tooltip title="Open settings">
                <IconButton>
                  <Avatar alt="Remy Sharp" src="./images/pictures.svg" />
                </IconButton>
              </Tooltip>
            </Box>
          </AppBarRightGrid>
        </AppBarInnerGrid>
        <AppBarExtendedGrid>
          <Grid>
            <Image
              src="/images/ALphaSearch 1.png"
              alt="Logo"
              width={188}
              height={35}
            />
          </Grid>
          <Grid>
            <Toggle />
          </Grid>
        </AppBarExtendedGrid>
      </AppBarMain>
    </>
  );
}
