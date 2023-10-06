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
  H3,
  Paragraph,
  HeadingGrid,
  ImageGrid,
  AppBarMain,
  ToolbarStyle,
  ListStyle,
  SearchButtonGrid,
  PaperSearch,
  Image1,
  SearchStyle,
  InputSearchLabel,
  ClockGrid,
  NavSideGrid,
} from "../listing/ListingStyle";
import Toggle from "./Toggle.js";
import Headingbar from "./Headingbar";

export default function ListingDesign() {
  return (
    <>
      <AppBarMain>
        <ToolbarStyle>
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid>
                <Image
                  src="/images/ALphaSearch 1.png"
                  alt="Logo"
                  width={188}
                  height={35}
                />
              </Grid>

              <Grid
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Toggle />
                <NavSideGrid>
                  <ListStyle>
                    <SearchButtonGrid>
                      <InputSearchLabel id="demo-simple-select-standard-label">
                        Search
                      </InputSearchLabel>
                    </SearchButtonGrid>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Lists
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Lists"
                      ></Select>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        More
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="More"
                      ></Select>
                    </FormControl>
                  </ListStyle>
                </NavSideGrid>
              </Grid>
            </Grid>

            <NavSideGrid>
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
            </NavSideGrid>
          </Grid>
        </ToolbarStyle>
      </AppBarMain>
      <Headingbar />
    </>
  );
}
