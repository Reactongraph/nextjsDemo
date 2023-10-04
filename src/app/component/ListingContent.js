"use client";

import React from "react";
import { Grid } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import {
  SidebarHeadingGrid,
  ListingContentGrid,
  DataMainGrid,
  ContentImgGrid,
  ListUl,
  ContentLink,
  CountGrid,
  LocationGrid,
  Description,
  Li,
  ContentHeadGrid,
} from "../listing/ListingStyle";
import Image from "next/image";

export default function ListingContent() {
  const data = [
    {
      id: 1,
      imgurl: "/images/Maskgroup1st.png",
      title: "The Ritz-Carlton Hotel Company, L.L.C.",
      link: "www.ritzcarlton.com",
      employeecount: "90.2k Employees",
      location: "Orlando, FL",
      description:
        "The Ritz-Carlton Hotel Company sets the gold standard in luxury hospitality worldwide. With an unshakeable credo and corporate philosophy of un-wavering commitment to service, both in our hotels and in our communities,",
    },
    {
      id: 2,
      imgurl: "/images/Maskgroup2nd.png",
      title: "The Ritz-Carlton Hotel Company, L.L.C.",
      link: "www.ritzcarlton.com",
      employeecount: "90.2k Employees",
      location: "Orlando, FL",
      description:
        "The Ritz-Carlton Hotel Company sets the gold standard in luxury hospitality worldwide. With an unshakeable credo and corporate philosophy of un-wavering commitment to service, both in our hotels and in our communities,",
    },
    {
      id: 3,
      title: "The Ritz-Carlton Hotel Company, L.L.C.",
      imgurl: "/images/Maskgroup3rd.svg",
      link: "www.ritzcarlton.com",
      employeecount: "90.2k Employees",
      location: "Orlando, FL",
      description:
        "The Ritz-Carlton Hotel Company sets the gold standard in luxury hospitality worldwide. With an unshakeable credo and corporate philosophy of un-wavering commitment to service, both in our hotels and in our communities,",
    },
    {
      id: 4,
      title: "The Ritz-Carlton Hotel Company, L.L.C.",
      imgurl: "/images/Maskgroup2nd.png",
      link: "www.ritzcarlton.com",
      employeecount: "90.2k Employees",
      location: "Orlando, FL",
      description:
        "The Ritz-Carlton Hotel Company sets the gold standard in luxury hospitality worldwide. With an unshakeable credo and corporate philosophy of un-wavering commitment to service, both in our hotels and in our communities,",
    },
  ];

  return (
    <ListingContentGrid>
      <SidebarHeadingGrid>
        <h3>Search result: 30 Companies</h3>
      </SidebarHeadingGrid>
      <Grid>
        {data.map((content) => (
          <DataMainGrid>
            <ContentHeadGrid>
              <ContentImgGrid>
                <Image src={content.imgurl} width={50} height={50}></Image>
              </ContentImgGrid>
              <Grid>
                <Grid>
                  <h3>{content.title}</h3>
                </Grid>
                <ListUl>
                  <ContentLink>
                    <LanguageIcon />
                    {content.link}
                  </ContentLink>
                  <Grid style={{ display: "flex", alignItems: "center" }}>
                    <Li>
                      <CountGrid>
                        <Diversity3Icon />
                        {content.employeecount}
                      </CountGrid>
                    </Li>
                  </Grid>

                  <Grid>
                    <li>
                      <LocationGrid>
                        <FmdGoodIcon />
                        {content.location}
                      </LocationGrid>
                    </li>
                  </Grid>
                </ListUl>
              </Grid>
            </ContentHeadGrid>
            <Description>{content.description}</Description>
          </DataMainGrid>
        ))}
      </Grid>
    </ListingContentGrid>
  );
}
