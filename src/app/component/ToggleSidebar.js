"use client";

import { React, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import {
  Grid,
  Button,
  Autocomplete,
  FormControl,
  Switch,
  TextField,
  Box,
  ToggleButtonGroup,
} from "@mui/material";
import {
  H4,
  H5,
  InputStyle,
  TextFieldStyle,
  FilterButton,
  ClearButton,
  InputStyle2,
  TextGrid,
  SliderStyle,
  FilterBottomGrid,
} from "../listing/ListingStyle";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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

export default function ToggleSidebar() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([0, 87]);
  const [termInput, setTermInput] = useState();
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ToggleButtonGroup
        orientation="vertical"
        exclusive
        onClick={handleClickOpen}
      >
        <TuneIcon />
      </ToggleButtonGroup>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <FilterButton>Filter</FilterButton>
          <ClearButton color="error" onClick={handleClear}>
            Clear All
          </ClearButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
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
                  onChange={(event) =>
                    setsearchIncludeInput(event.target.value)
                  }
                ></TextFieldStyle>
              </FormControl>

              <InputStyle>Exclude</InputStyle>
              <FormControl sx={{ width: "100%" }}>
                <TextFieldStyle
                  placeholder="Type and search"
                  value={searchExcludeInput}
                  onChange={(event) =>
                    setSearchExcludeInput(event.target.value)
                  }
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
                    onChange={(event) =>
                      setFirstRevenueInput(event.target.value)
                    }
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
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{
              backgroundColor: "rgba(74, 44, 245, 1)",
              color: "white",
              fontWeight: "700",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
