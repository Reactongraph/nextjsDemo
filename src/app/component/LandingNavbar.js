"use client";

import React, { useState } from "react";
import {
  Box,
  Menu,
  Avatar,
  Tooltip,
  FormControl,
  Select,
  Grid,
  IconButton,
  MenuItem,
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
  const dummyMenuItems = [
    {
      title: "Profile",
    },
    {
      title: "My Account",
    },
    {
      title: "Logout",
    },
  ];

  const [list, setList] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setList(event.target.value);
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
              }}
            >
              <Select
                variant="standard"
                value={list}
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
                value={list}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">
                  <em style={{ fontStyle: "normal" }}>More</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </AppBarLeftGrid>
          <AppBarRightGrid>
            <Box>
              <Tooltip title="Open settings">
                <IconButton
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <Avatar alt="Remy Sharp" src="./images/pictures.svg" />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {dummyMenuItems.map((item) => (
                    <MenuItem
                      onClick={handleClose}
                      key={item.title}
                      value={item.title}
                    >
                      {item.title}
                    </MenuItem>
                  ))}
                </Menu>
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
