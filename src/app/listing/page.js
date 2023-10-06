"use client";

import React from 'react';
import ListingDesign from '../component/ListingDesign';
import ListingSidebar from '../component/ListingSidebar.js';
import ListingContent from '../component/ListingContent';
import { ListingPageMain, ContentArea } from './ListingStyle';

function page() {
  return (
    <ListingPageMain>
      <ListingDesign/>
      <ContentArea>
      <ListingSidebar/>
      <ListingContent/>
      </ContentArea>
    </ListingPageMain>
  )
}

export default page