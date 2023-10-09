"use client";

import * as React from "react";

import {
  Grid,
  Avatar,
  Drawer,
  IconButton,
  Divider,
  FormControl,
  InputLabel,
  Select,
  ToggleButtonGroup,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  SideSearchButtonGrid,
  ToggleStyle,
  ToggleStyleGrid,
  DrawerHeader,
} from "../listing/ListingStyle";

export default function Toggle() {
  const [view, setView] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ToggleStyleGrid>
        <ToggleButtonGroup
          orientation="vertical"
          value={view}
          exclusive
          onClick={() => setView(!view)}
        >
          <ToggleStyle
            value="list"
            aria-label="list"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </ToggleStyle>
        </ToggleButtonGroup>
        <Drawer variant="persistent" anchor="right" open={open}>
          <>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                <ChevronRightIcon />
              </IconButton>
              <IconButton>
                <Avatar alt="Remy Sharp" src="./images/pictures.svg" />
              </IconButton>
            </DrawerHeader>
            <Divider />

            <Grid style={{ display: "grid", margin: "50px", gap: "25px" }}>
              <SideSearchButtonGrid>Search</SideSearchButtonGrid>
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
            </Grid>
          </>
        </Drawer>
      </ToggleStyleGrid>
    </>
  );
}
