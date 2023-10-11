import React from "react";

import { InputBase, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { ImageGrid, SearchStyle } from "../listing/ListingStyle";

import {
  H3Grid,
  PaperGrid,
  LeftGrid,
  RightGrid,
  H3,
  LandingHeadingGrid,
  AlphaImage,
} from "../landing/LandingStyle";
import Image from "next/image";

export default function LandingHeadingbar() {
  return (
    <>
      <LandingHeadingGrid>
        <Grid>
          <Image
            src="/images/HeadingSideImage.png"
            alt="background image"
            width={150}
            height={200}
          ></Image>
        </Grid>
        <H3Grid>
          <H3>
            Find what you are looking for with
            <span style={{ color: "rgba(74, 44, 245, 1)" }}> Alphasearch.</span>
          </H3>
        </H3Grid>
        <ImageGrid>
          <AlphaImage
            src="./images/ALphaSearchsymbol2.svg"
            alt="alpha image"
            width={163}
            height={145}
          />
        </ImageGrid>
      </LandingHeadingGrid>
      <PaperGrid>
        <LeftGrid>
          <SearchStyle>
            <SearchIcon />
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
