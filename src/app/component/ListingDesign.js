"use client";

import * as React from "react";
import {
  Box,
  IconButton,
  Avatar,
  Tooltip,
  SearchIcon,
  SearchIconWrapper,
  StyledInputBase,
  InputBase,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from "@mui/material";
import Image from "next/image";
import {
  AppBarMain,
  SearchButton,
  PaperSearch,
  SearchStyle,
  AppBarInnerGrid,
  AppBarLeftGrid,
  AppBarRightGrid,
  AppBarExtendedGrid,
} from "../listing/ListingStyle";
import Toggle from "./Toggle.js";
import Headingbar from "./Headingbar";

export default function ListingDesign() {
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
            <PaperSearch>
              <SearchStyle>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </SearchStyle>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search a term, industry, or a specific company"
              />
              <Image
                src="/images/clock.png"
                alt="clock"
                width={20}
                height={20}
              ></Image>
            </PaperSearch>

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
      <Headingbar />
    </>
  );
}
