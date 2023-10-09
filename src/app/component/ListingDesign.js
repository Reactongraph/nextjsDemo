"use client";

import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import {
  Box,
  Menu,
  Avatar,
  Tooltip,
  SearchIcon,
  StyledInputBase,
  InputBase,
  FormControl,
  Select,
  Grid,
  IconButton,
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
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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

            <FormControl
              sx={{
                m: 1,
                minWidth: 70,
                fontFamily: "__Inter_Fallback_e66fe9",
              }}
            >
              <Select
                variant="standard"
                value={age}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">
                  <em style={{ fontStyle: "normal" }}>Lists</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 70 }}>
              <Select
                variant="standard"
                value={age}
                onChange={handleChange}
                displayEmpty
              >
                
                <MenuItem value="">
                 
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </AppBarLeftGrid>
          <AppBarRightGrid>
            <PaperSearch>
              <SearchStyle>
                <SearchIcon />
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
                <IconButton onClick={handleChange}>
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
