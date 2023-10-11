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
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { SideSearchButtonGrid, DrawerHeader } from "../listing/ListingStyle";

export default function ContentDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer variant="persistent" anchor="right" open={open}>
      <>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Grid style={{ display: "grid", margin: "50px", gap: "25px" }}></Grid>
      </>
    </Drawer>
  );
}
