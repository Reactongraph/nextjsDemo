"use client";
import { React, useState } from "react";
import {
  Grid,
  Switch,
  FormControl,
  MenuItem,
  Box,
  TextField,
  Autocomplete,
  Select,
  InputLabel,
} from "@mui/material";

import {
  ListingSidebarMain,
  SidebarHeadingGrid,
  ClearButton,
  H4,
  H5,
  InputStyle,
  TextFieldStyle,
  InputStyle2,
  FilterBottomGrid,
  SliderStyle,
  TextGrid,
  FilterButton,
  ToggleStyleGrid,
} from "../listing/ListingStyle";
import ToggleSidebar from "./ToggleSidebar";
import MuiChip from "./MuiChip";

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

const Industry = [
  {
    label: "Agreeculter",
  },
  {
    label: "Health",
  },
  {
    label: "Finance",
  },
];

const marks = [
  {
    value: 0,
    label: "$ 0",
  },
  {
    value: 80,
    label: "$ 2.5 M",
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function ListingSidebar() {
  const [value, setValue] = useState([0, 87]);
  const [termInput, setTermInput] = useState("");
  const [termExcludeInput, setTermExcludeInput] = useState("");
  const [searchIncludeInput, setsearchIncludeInput] = useState("");
  const [searchExcludeInput, setSearchExcludeInput] = useState("");
  const [searchLocationInput, setSearchLocationInput] = useState("");
  const [firstRevenueInput, setFirstRevenueInput] = useState("");
  const [secondRevenueInput, setSecondRevenueInput] = useState("");
  const [firstEmployeeInput, setFirstEmployeeInput] = useState("");
  const [secondEmployeeInput, setSecondEmployeeInput] = useState("");
  const [companyViewInput, setCompanyViewInput] = useState("");

  const handleFilter = (e) => {
    e.preventDefault();
    console.log(termInput);
    console.log(termExcludeInput);
    console.log(searchIncludeInput);
    console.log(searchExcludeInput);
    console.log(searchLocationInput);
    console.log(firstRevenueInput);
    console.log(secondRevenueInput);
    console.log(firstEmployeeInput);
    console.log(secondEmployeeInput);
    console.log(companyViewInput);
  };

  const handleClear = () => {
    setTermInput("");
    setTermExcludeInput("");
    setsearchIncludeInput("");
    setSearchExcludeInput("");
    setSearchLocationInput("");
    setFirstRevenueInput("");
    setSecondRevenueInput("");
    setFirstEmployeeInput("");
    setSecondEmployeeInput("");
    setCompanyViewInput("");
  };

  return (
    <>
      <ToggleStyleGrid>
        <Grid>
          <H4>Filter</H4>
        </Grid>
        <Grid>
          <ToggleSidebar />
        </Grid>
      </ToggleStyleGrid>
      <ListingSidebarMain>
        <Grid>
          <SidebarHeadingGrid>
            <FilterButton>Filter</FilterButton>
            <ClearButton color="error" onClick={handleClear}>
              Clear All
            </ClearButton>
          </SidebarHeadingGrid>
          <Grid style={{ padding: "5px" }}>
            <H4>Terms</H4>
            <InputStyle>Include these terms</InputStyle>

            <MuiChip />

            <FormControl sx={{ width: "100%" }}></FormControl>
            <InputStyle>Exclude these terms</InputStyle>
            <MuiChip />
            <H4>Operating Model</H4>
            <H5>Industry</H5>
            <InputStyle>Include</InputStyle>

            <Autocomplete
              id="industry-select-demo"
              style={{ margin: "5px" }}
              options={Industry}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box component="li" sx={{ mr: 2, flexShrink: 0 }} {...props}>
                  {option.label}
                </Box>
              )}
              renderInput={(params) => (
                <FormControl sx={{ width: "100%" }} onClick={handleFilter}>
                  <TextField
                    value={searchIncludeInput}
                    onChange={(event) =>
                      setsearchIncludeInput(event.currentTarget.value)
                    }
                    {...params}
                    label="Type and search"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new",
                    }}
                  />
                </FormControl>
              )}
            />
            <InputStyle>Exclude</InputStyle>

            <Autocomplete
              id="industry-select-demo"
              style={{ margin: "5px" }}
              options={Industry}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box component="li" sx={{ mr: 2, flexShrink: 0 }} {...props}>
                  {option.label}
                </Box>
              )}
              renderInput={(params) => (
                <Grid>
                  <FormControl sx={{ width: "100%" }}>
                    <TextField
                      value={searchExcludeInput}
                      onChange={(event) =>
                        setSearchExcludeInput(event.target.value)
                      }
                      {...params}
                      label="Type and search"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new",
                      }}
                    />
                  </FormControl>
                </Grid>
              )}
            />

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
                  <FormControl sx={{ width: "100%" }}>
                    <TextField
                      value={searchLocationInput}
                      onChange={(event) =>
                        setSearchLocationInput(event.target.value)
                      }
                      {...params}
                      label="Select Location"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                    />
                  </FormControl>
                </Grid>
              )}
            />

            <H4>Size</H4>
            <InputStyle2>Revenue</InputStyle2>
            <TextGrid>
              <FormControl sx={{ width: "100%" }}>
                <TextFieldStyle
                  placeholder="0"
                  value={firstRevenueInput}
                  onChange={(event) => setFirstRevenueInput(event.target.value)}
                ></TextFieldStyle>
              </FormControl>

              <FormControl sx={{ width: "100%" }}>
                <TextFieldStyle
                  placeholder="$ 2.5 Million"
                  value={secondRevenueInput}
                  onChange={(event) =>
                    setSecondRevenueInput(event.target.value)
                  }
                ></TextFieldStyle>
              </FormControl>
            </TextGrid>

            <Box sx={{ width: 350 }}>
              <SliderStyle
                getAriaLabel={() => "Minimum distance"}
                defaultValue={80}
                value={value}
                getAriaValueText={valuetext}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </Box>
            <InputStyle2>Employee</InputStyle2>
            <TextGrid>
              <FormControl sx={{ width: "100%" }}>
                <TextFieldStyle
                  placeholder="0 (Min)"
                  value={firstEmployeeInput}
                  onChange={(event) =>
                    setFirstEmployeeInput(event.target.value)
                  }
                ></TextFieldStyle>
              </FormControl>

              <FormControl sx={{ width: "100%" }}>
                <TextFieldStyle
                  placeholder="10,000+"
                  value={secondEmployeeInput}
                  onChange={(event) =>
                    setSecondEmployeeInput(event.target.value)
                  }
                ></TextFieldStyle>
              </FormControl>
            </TextGrid>

            <Box sx={{ width: 350 }}>
              <SliderStyle
                getAriaLabel={() => "Minimum distance"}
                defaultValue={80}
                value={value}
                getAriaValueText={valuetext}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
                disableSwap
              />
            </Box>

            <FilterBottomGrid>
              <InputStyle2>Company I have viewed</InputStyle2>
              <Switch
                value={companyViewInput}
                onChange={(event) => setCompanyViewInput(event.target.value)}
              />
            </FilterBottomGrid>
          </Grid>
        </Grid>
      </ListingSidebarMain>
    </>
  );
}
