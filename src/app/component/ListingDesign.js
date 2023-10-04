"use client";

import * as React from "react";
import {
  Box,
  IconButton,
  Avatar,
  Tooltip,
  SearchIcon,
  SearchIconWrapper,
  StyledInputBase,
  InputBase,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import Image from "next/image";
import {
  H3,
  Paragraph,
  HeadingGrid,
  ImageGrid,
  AppBarMain,
  ToolbarStyle,
  ListStyle,
  SearchButtonGrid,
  PaperSearch,
  Image1,
  SearchStyle,
  InputSearchLabel,
} from "../listing/ListingStyle";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

export default function ListingDesign() {
  return (
    <>
      <AppBarMain>
        <ToolbarStyle>
          <Image src="/images/ALphaSearch 1.png" width={188} height={35} />
          <ListStyle>
            <SearchButtonGrid>
              <InputSearchLabel id="demo-simple-select-standard-label">
                Search
              </InputSearchLabel>
            </SearchButtonGrid>
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
          </ListStyle>
          <PaperSearch>
            <SearchStyle>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </SearchStyle>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search a term, industry, or a specific company"
            />
            <QueryBuilderIcon style={{ color: "grey" }} />
          </PaperSearch>
          <Box>
            <Tooltip title="Open settings">
              <IconButton>
                <Avatar alt="Remy Sharp" src="./images/pictures.svg" />
              </IconButton>
            </Tooltip>
          </Box>
        </ToolbarStyle>
      </AppBarMain>
      <HeadingGrid>
        <H3>
          Find what you're looking for with
          <Paragraph>Alphasearch.</Paragraph>
        </H3>
        <ImageGrid>
          <Image1
            src="./images/ALphaSearchsymbol2.svg"
            width={100}
            height={80}
          />
          <Image
            src="./images/ALphaSearchsymbol1.svg"
            width={100}
            height={80}
          />
        </ImageGrid>
      </HeadingGrid>
    </>
  );
}
