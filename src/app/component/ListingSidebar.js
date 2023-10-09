"use client";
import { React, useState } from "react";
import {
  Grid,
  Switch,
  FormControl,
  Chip,
  Box,
  TextField,
  Autocomplete,
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
} from "../listing/ListingStyle";

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
  const [value, setValue] = useState([0, 87]);
  const [termInput, setTermInput] = useState(["Hotel"]);
  const [termExcludeInput, setTermExcludeInput] = useState();
  const [searchIncludeInput, setsearchIncludeInput] = useState();
  const [searchExcludeInput, setSearchExcludeInput] = useState();
  const [searchLocationInput, setSearchLocationInput] = useState();
  const [firstRevenueInput, setFirstRevenueInput] = useState();
  const [secondRevenueInput, setSecondRevenueInput] = useState();
  const [firstEmployeeInput, setFirstEmployeeInput] = useState();
  const [secondEmployeeInput, setSecondEmployeeInput] = useState();
  const [companyViewInput, setCompanyViewInput] = useState();

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
      <ListingSidebarMain>
        <Grid>
          <SidebarHeadingGrid>
            <FilterButton onClick={handleFilter}>Filter</FilterButton>
            <ClearButton color="error" onClick={handleClear}>
              Clear All
            </ClearButton>
          </SidebarHeadingGrid>
          <Grid style={{ padding: "5px" }}>
            <H4>Terms</H4>
            <InputStyle>Include these terms</InputStyle>

            <Autocomplete
              multiple
              freeSolo
              value={termInput}
              options={[]}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    style={{ color: "rgba(71, 100, 246, 1)" }}
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  value={termInput}
                  onChange={(event) => setTermInput(event.target.value)}
                  {...params}
                  placeholder="Type any term"
                />
              )}
            />

            <FormControl sx={{ width: "100%" }}></FormControl>
            <InputStyle>Exclude these terms</InputStyle>
            <FormControl sx={{ width: "100%" }}>
              <TextFieldStyle
                placeholder="Type any term"
                value={termExcludeInput}
                onChange={(event) => setTermExcludeInput(event.target.value)}
              ></TextFieldStyle>
            </FormControl>
            <H4>Operating Model</H4>
            <H5>Industry</H5>
            <InputStyle>Include</InputStyle>

            <FormControl sx={{ width: "100%" }}>
              <TextFieldStyle
                placeholder="Type and search"
                value={searchIncludeInput}
                onChange={(event) => setsearchIncludeInput(event.target.value)}
              ></TextFieldStyle>
            </FormControl>

            <InputStyle>Exclude</InputStyle>
            <FormControl sx={{ width: "100%" }}>
              <TextFieldStyle
                placeholder="Type and search"
                value={searchExcludeInput}
                onChange={(event) => setSearchExcludeInput(event.target.value)}
              ></TextFieldStyle>
            </FormControl>

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
                        autoComplete: "new-password", // disable autocomplete and autofill
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
            <SliderStyle
              getAriaLabel={() => "Temperature range"}
              value={value}
              valueLabelDisplay="auto"
            />
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
            <SliderStyle
              getAriaLabel={() => "Temperature range"}
              value={value}
              valueLabelDisplay="auto"
            />
            <FilterBottomGrid>
              <InputStyle2>Company I've viewed</InputStyle2>
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
