import React from "react";

import { SearchIcon, StyledInputBase, InputBase } from "@mui/material";

import {
  H3,
  HeadingGrid,
  ImageGrid,
  Image1,
  SearchStyle,
} from "../listing/ListingStyle";

import {
  H3Grid,
  PaperGrid,
  LeftGrid,
  RightGrid,
} from "../landing/LandingStyle";
import Image from "next/image";

export default function LandingHeadingbar() {
  return (
    <>
      <HeadingGrid>
        <H3Grid>
          <H3>
            Find what you are looking for with
            <span style={{ color: "rgba(74, 44, 245, 1)" }}> Alphasearch.</span>
          </H3>
        </H3Grid>
        <ImageGrid>
          <Image1
            src="./images/ALphaSearchsymbol2.svg"
            alt="alpha image"
            width={163}
            height={145}
          />
        </ImageGrid>
      </HeadingGrid>
      <PaperGrid>
        <LeftGrid>
          <SearchStyle>
            <SearchIcon />
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </SearchStyle>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search a term, industry, or a specific company"
          />
        </LeftGrid>
        <RightGrid>
          Recently viewed
          <Image
            src="/images/clock.png"
            alt="clock"
            width={20}
            height={20}
          ></Image>
        </RightGrid>
      </PaperGrid>
    </>
  );
}
