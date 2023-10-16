import React, { useState } from "react";
import { Divider, Drawer, Grid, Button, Box, Tab, Link } from "@mui/material";
import {
  Language as LanguageIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Pinterest as PinterestIcon,
  Cancel as CancelIcon,
  Sync as SyncIcon,
} from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { DrawerHeader } from "../listing/ListingStyle";
import Image from "next/image";

export default function ContentDrawer({ open, onClose, content }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!content) {
    return null;
  }

  return (
    <Drawer
      style={{ width: "100%" }}
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <DrawerHeader>
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "24px",
            fontFamily: "Plus Jakarta Sans",
          }}
        >
          <Grid style={{ display: "flex", gap: "15px" }}>
            <Grid>
              <Image
                src={content.imgurl}
                alt="content image"
                width={50}
                height={50}
              ></Image>
            </Grid>
            <Grid>
              <h2>{content.title}</h2>
              <Grid style={{ display: "flex", gap: "15px" }}>
                <Grid>
                  <Link
                    href="www.ritzcarlton.com"
                    style={{ display: "flex", color: "#4764F6" }}
                  >
                    <LanguageIcon />
                    {content.link}
                  </Link>
                </Grid>
                <Grid>
                  <Link href="https://www.facebook.com/">
                    <FacebookIcon style={{ color: "#1877F2" }} />
                  </Link>
                  <Link href="https://www.twitter.com/">
                    <TwitterIcon style={{ color: "#1D9BF0" }} />
                  </Link>
                  <Link href="https://in.linkedin.com/">
                    <LinkedInIcon style={{ color: "#0A66C2" }} />
                  </Link>
                  <Link href="https://in.pinterest.com/">
                    <PinterestIcon style={{ color: "#BD081C" }} />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <CancelIcon onClick={onClose} style={{ cursor: "pointer" }} />
            </Grid>
          </Grid>

          <Grid style={{ display: "flex", gap: " 10px" }}>
            <Button
              style={{
                backgroundColor: "#4A2CF5",
                color: "#FFFFFF",
                textAlign: "center",

                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                textTransform: "capitalize",
              }}
            >
              Add to list
            </Button>
            <Button
              style={{
                backgroundColor: "rgb(163 152 227)",
                color: "#4A2CF5",

                fontWeight: "600",
                lineHeight: "20px",
                letterSpacing: "0em",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              Search Similar
            </Button>
            <Button
              style={{
                backgroundColor: "rgb(222 223 225)",
                color: "#000000",
                fontWeight: "600",
                lineHeight: "20px",
                letterSpacing: "0em",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              Sync
              <SyncIcon />
            </Button>
          </Grid>
        </Grid>
      </DrawerHeader>
      <Divider />
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
        }}
      >
        <Grid>
          <h3>Industry</h3>
          <h3>Ownership Status</h3>
          <h3>Email</h3>
          <h3>Phone Number</h3>
          <h3>Headquarters</h3>
          <h3>Executives</h3>
        </Grid>
        <Grid>
          <p>Industry Name</p>
          <p> {content.location}</p>
          <p>industryname@gmail.com</p>
          <p>+1- (262) 569 0246</p>
          <p>789 Sw Federal Hwy. #308, Stuart, Florida, 34994, United States</p>
          <p>John Caules</p>
        </Grid>
      </Grid>
      <Divider />
      <Box sx={{ width: "800px", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Overview" value="1" />
              <Tab label="Financials" value="2" />
              <Tab label="Executives" value="3" />
              <Tab label="Conference " value="4" />
              <Tab label="Feed" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <h3>Sizing</h3>
            <Grid>
              <Grid style={{ display: "flex", gap:"10px" }}>
                <Image
                  src="/images/TotalEmployee.png"
                  height={40}
                  width={40}
                ></Image>
                <Grid>
                <h4>0</h4>
                <p>Total Employees</p>
                </Grid>
              </Grid>
              <Grid style={{ display: "flex", gap:"10px" }}>
                <Image
                  src="/images/Total Revenue.png"
                  height={40}
                  width={40}
                ></Image>
                <Grid>
                  <h4>0</h4>
                  <p>Total Revenue</p>
                </Grid>
              </Grid>
              <Grid>
                <Image
                  src="/images/Website Visits.png"
                  height={40}
                  width={40}
                ></Image>
                <h4>15.1k</h4>
                <p>Website Visits</p>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item Four</TabPanel>
          <TabPanel value="5">Item Five</TabPanel>
        </TabContext>
      </Box>
    </Drawer>
  );
}
