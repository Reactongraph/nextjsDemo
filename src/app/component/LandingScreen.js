import { LandingScreenGrid, AllCompaniesGrid } from "../landing/LandingStyle";
import Image from "next/image";
import React from "react";

export default function LandingScreen() {
  return (
    <LandingScreenGrid>
      <AllCompaniesGrid>
        <h3>Search Companies</h3>
        <Image
          src="/images/SearchCompany.png"
          alt="search company"
          width={100}
          height={100}
        ></Image>
      </AllCompaniesGrid>
      <AllCompaniesGrid>
        <h3>Discover Similar Companies</h3>
        <Image
          src="/images/DiscoverCompany.png"
          alt="search company"
          width={100}
          height={100}
        ></Image>
      </AllCompaniesGrid>
      <AllCompaniesGrid>
        <h3>Browse Companies by Industry</h3>
        <Image
          src="/images/BrowseCompany.png"
          alt="search company"
          width={100}
          height={100}
        ></Image>
      </AllCompaniesGrid>
    </LandingScreenGrid>
  );
}
