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
        <H3>
          Find what you're looking for with
          <Paragraph>Alphasearch.</Paragraph>
        </H3>
      </Grid>
      <ImageGrid>
        <Image1
          src="./images/ALphaSearchsymbol2.svg"
          alt="alpha image"
          width={100}
          height={80}
        />
        <Image
          src="./images/ALphaSearchsymbol1.svg"
          alt="alpha image"
          width={100}
          height={80}
        />
      </ImageGrid>
    </HeadingGrid>
  );
}
