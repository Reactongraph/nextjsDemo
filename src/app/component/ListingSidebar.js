"use client";
import React from "react";
import { Grid, Switch, Slider } from "@mui/material";
import {
  ListingSidebarMain,
  SidebarHeadingGrid,
  ClearButton,
  H4,
  H5,
  InputStyle,
  TextFieldStyle,
  InputStyle2,
} from "../listing/ListingStyle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
];

export default function ListingSidebar() {
  const [value, setValue] = React.useState([0, 87]);

  return (
    <ListingSidebarMain>
      <Grid>
        <SidebarHeadingGrid>
          <H4>Filter</H4>
          <ClearButton color="error">Clear All</ClearButton>
        </SidebarHeadingGrid>
        <Grid style={{ padding: "5px" }}>
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
          <H4>Location</H4>
          <InputStyle>Headquaters</InputStyle>
          <Autocomplete
            id="country-select-demo"
            style={{ margin: "5px" }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box component="li" sx={{ mr: 2, flexShrink: 0 }} {...props}>
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <Grid>
                <FmdGoodIcon />
                <TextField
                  {...params}
                  label="Select Location"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              </Grid>
            )}
          />
          <H4>Size</H4>
          <InputStyle2>Revenue</InputStyle2>
          <Grid style={{ display: "flex" }}>
            <TextFieldStyle placeholder="0"></TextFieldStyle>
            <TextFieldStyle placeholder="$ 2.5 Million"></TextFieldStyle>
          </Grid>
          <Slider
            style={{
              color: "rgba(74, 44, 245, 1)",
              width: "92%",
              margin: "auto 15px",
            }}
            getAriaLabel={() => "Temperature range"}
            value={value}
            valueLabelDisplay="auto"
          />
          <InputStyle2>Employee</InputStyle2>
          <Grid style={{ display: "flex" }}>
            <TextFieldStyle placeholder="0 (Min)"></TextFieldStyle>
            <TextFieldStyle placeholder="10,000+"></TextFieldStyle>
          </Grid>
          <Slider
            style={{
              color: "rgba(74, 44, 245, 1)",
              width: "92%",
              margin: "auto 15px",
            }}
            getAriaLabel={() => "Temperature range"}
            value={value}
            valueLabelDisplay="auto"
          />
          <Grid
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "34px",
            }}
          >
            <InputStyle2>Company I've viewed</InputStyle2>
            <Switch />
          </Grid>
        </Grid>
      </Grid>
    </ListingSidebarMain>
  );
}
