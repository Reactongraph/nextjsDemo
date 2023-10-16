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
  Slider,
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

  const [sliderValue, setSliderValue] = useState(marks.label);

  const [sliderValueEmployee, setSliderValueEmployee] = useState(marks.label);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleSliderChangeEmployee = (event, newValue) => {
    setSliderValueEmployee(newValue);
  };

  const handleTextFieldChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
  };
  const handleTextFieldChangeEmployee = (event) => {
    const newValue = event.target.value;
    setSliderValueEmployee(newValue);
  };

  const handleFilter = () => {
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

  console.log(searchLocationInput);
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

  const handleFilternew = () => {
    console.log("Filtering with input:", searchIncludeInput);
    console.log(searchExcludeInput);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log();
      handleFilternew();
    }
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

            <FormControl sx={{ width: "100%" }}>
              <TextField
                value={searchIncludeInput}
                onKeyDown={handleKeyDown}
                onChange={(event) => setsearchIncludeInput(event.target.value)}
                label="Type and search"
              />
            </FormControl>

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
                      onKeyDown={handleKeyDown}
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

            <Box sx={{ width: 350 }}>
              <TextGrid>
                <FormControl sx={{ width: "100%" }}>
                  <TextFieldStyle
                    placeholder="0"
                    value={sliderValue}
                    onChange={handleTextFieldChange}
                    id="slider-text"
                  ></TextFieldStyle>
                </FormControl>
                <FormControl sx={{ width: "100%" }}>
                  <TextFieldStyle
                    placeholder="$ 2.5 Million"
                    value={sliderValue}
                    onChange={handleTextFieldChange}
                    id="slider-text"
                  ></TextFieldStyle>
                </FormControl>
              </TextGrid>
              <SliderStyle
                value={sliderValue}
                onChange={handleSliderChange}
                getAriaLabel={() => "Minimum distance"}
                defaultValue={80}
                getAriaValueText={valuetext}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </Box>

            <InputStyle2>Employee</InputStyle2>

            <Box sx={{ width: 350 }}>
              <TextGrid>
                <FormControl sx={{ width: "100%" }}>
                  <TextFieldStyle
                    placeholder="0 (Min)"
                    value={sliderValueEmployee}
                    onChange={handleTextFieldChangeEmployee}
                    id="slider-text"
                  ></TextFieldStyle>
                </FormControl>
                <FormControl sx={{ width: "100%" }}>
                  <TextFieldStyle
                    placeholder="10,000+"
                    value={sliderValueEmployee}
                    onChange={handleTextFieldChangeEmployee}
                    id="slider-text"
                  ></TextFieldStyle>
                </FormControl>
              </TextGrid>
              <SliderStyle
                value={sliderValueEmployee}
                onChange={handleSliderChangeEmployee}
                getAriaLabel={() => "Minimum distance"}
                defaultValue={80}
                getAriaValueText={valuetext}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
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
