"use client";

import { React, useState } from "react";
import { Grid } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
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
  ContentH3,
} from "../listing/ListingStyle";
import Image from "next/image";
import ContentDrawer from "./ContentDrawer";

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

  const [open, setOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(data);

  const handleDrawerOpen = (content) => {
    setSelectedContent(content);
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setSelectedContent(null);
    setOpen(false);
  };

  return (
    <>
      <ListingContentGrid>
        <SidebarHeadingGrid>
          <h3>Search result: 30 Companies</h3>
        </SidebarHeadingGrid>
        <ContentAreaGrid>
          {data.map((content) => (
            <DataMainGrid
              key={content.id}
              onClick={() => handleDrawerOpen(content)}
            >
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
                    <ContentH3>{content.title}</ContentH3>
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
      <ContentDrawer
        open={open}
        onClose={handleDrawerClose}
        content={selectedContent}
      />
    </>
  );
}
