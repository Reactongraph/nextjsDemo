"use client";

import React from 'react';
import { Grid } from '@mui/material';
import ListingDesign from '../component/ListingDesign';
import ListingSidebar from '../component/ListingSidebar.js';

function page() {
  return (
    <Grid style={{backgroundColor:"#FFF", height: "100vh"}}>
      <ListingDesign/>
      <ListingSidebar/>
    </Grid>
  )
}

export default page;