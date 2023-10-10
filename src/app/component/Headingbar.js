import React from "react";

import { Grid } from "@mui/material";
import {
  H3,
  Paragraph,
  HeadingGrid,
  ImageGrid,
  Image1,
} from "../listing/ListingStyle";
import Image from "next/image";

export default function Headingbar() {
  return (
    <HeadingGrid>
      <Grid>
        <Image
          src="/images/HeadingSideImage.png"
          alt="background image"
          width={100}
          height={100}
        ></Image>
        <H3>
          Find what you are looking for with
          <Paragraph>Alphasearch.</Paragraph>
        </H3>
      </Grid>
      <ImageGrid>
        <Image1
          src="./images/ALphaSearchsymbol2.svg"
          alt="alpha image"
          width={150}
          height={100}
        />
        <Image
          src="./images/ALphaSearchsymbol1.svg"
          alt="alpha image"
          width={150}
          height={100}
        />
      </ImageGrid>
    </HeadingGrid>
  );
}
