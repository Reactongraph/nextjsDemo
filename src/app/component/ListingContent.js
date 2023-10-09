"use client";

import React from "react";
import { Grid } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ToggleSidebar from "./ToggleSidebar";
import {
  SidebarHeadingGrid,
  ListingContentGrid,
  DataMainGrid,
  ContentLeftGrid,
  ContentRightGrid,
  ContentTitleGrid,
  ListUl,
  ContentLink,
  CountGrid,
  LocationGrid,
  Description,
  Li,
  ContentHeadGrid,
  ContentAreaGrid,
  ToggleStyleGrid,
  H4,
  H3,
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
      imgurl: "/images/Maskgroup1st.png",
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
  ];

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

      <ListingContentGrid>
        <SidebarHeadingGrid>
          <h3>Search result: 30 Companies</h3>
        </SidebarHeadingGrid>
        <ContentAreaGrid>
          {data.map((content) => (
            <DataMainGrid>
              <ContentHeadGrid>
                <ContentLeftGrid>
                  <Image
                    src={content.imgurl}
                    alt="content image"
                    width={50}
                    height={50}
                  ></Image>
                </ContentLeftGrid>
                <ContentRightGrid>
                  <ContentTitleGrid>
                    <H3>{content.title}</H3>
                  </ContentTitleGrid>
                  <Grid>
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
                </ContentRightGrid>
              </ContentHeadGrid>
              <Description>{content.description}</Description>
            </DataMainGrid>
          ))}
        </ContentAreaGrid>
      </ListingContentGrid>
    </>
  );
}
