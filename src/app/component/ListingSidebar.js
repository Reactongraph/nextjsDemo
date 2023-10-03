"use client";
import React from 'react';
import { InputLabel,
TextField,
Grid,
 } from "@mui/material";
 import SearchIcon from '@mui/icons-material/Search';
import { ListingSidebarMain, SidebarHeadingGrid, ClearButton} from '../listing/ListingStyle';

export default function ListingSidebar() {
  return (
    <Grid>
    <ListingSidebarMain>
        <Grid>
          <SidebarHeadingGrid>
          <h4>Filter</h4>
          <ClearButton color="error">Clear All</ClearButton>
          </SidebarHeadingGrid>
          <h4 style = {{padding: "2%"}}>Terms</h4>
          <InputLabel style = {{padding: "2%"}}>Include these terms</InputLabel>
          <TextField style = {{padding: "2%", width: "100%"}} placeholder = "Type any term"></TextField>
          <InputLabel style = {{padding: "2%"}}>Exclude these terms</InputLabel>
          <TextField style = {{padding: "2%", width: "100%"}} placeholder = "Type any term"></TextField>
          <h4 style = {{padding: "2%"}}>Operating Model</h4>
          <h5 style = {{padding: "2%"}}>Industry</h5>
          <InputLabel style = {{padding: "2%"}}>Include</InputLabel>
          <TextField style = {{padding: "2%",width: "100%"}} placeholder = "Type and search"></TextField>
          <SearchIcon/>
          <InputLabel style = {{padding: "2%"}}>Exclude</InputLabel>
          <TextField style = {{padding: "2%", width: "100%"}} placeholder = "Type and search"></TextField>
        </Grid>
      </ListingSidebarMain>
        <SidebarHeadingGrid>
        <h3>Search result: 30 Companies</h3>
        </SidebarHeadingGrid>
      </Grid>
  )
}
