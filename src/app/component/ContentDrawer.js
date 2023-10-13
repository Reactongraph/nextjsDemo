import React from "react";
import { Divider, Drawer, Grid, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Image from "next/image";
import { DrawerHeader } from "../listing/ListingStyle";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SyncIcon from "@mui/icons-material/Sync";

export default function ContentDrawer({ open, onClose, content }) {
  if (!content) {
    return null;
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <DrawerHeader>
        <Grid>
          <Image
            src={content.imgurl}
            alt="content image"
            width={50}
            height={50}
          ></Image>
          <h2>{content.title}</h2>
          <Grid>
            <LanguageIcon />
            {content.link}
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <PinterestIcon />
          </Grid>
        </Grid>
        <Grid>
          <Button>Add to List</Button>
          <Button>Search Similar</Button>
          <Button>
            Sync
            <SyncIcon />
          </Button>
        </Grid>
        <Grid>
          <CancelIcon onClick={onClose} style={{ cursor: "pointer" }} />
        </Grid>
      </DrawerHeader>
      <Divider />
      <Grid>
        <h3>Industry</h3>
        <h3>Ownership Status</h3>
        <h3>Email</h3>
        <h3>Phone Number</h3>
        <h3>Headquarters</h3>
        <h3>Executives</h3>
      </Grid>
      <Divider />
    </Drawer>
  );
}
