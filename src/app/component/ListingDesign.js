"use client";

import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Grid,
  Container,
  Avatar,
  Tooltip,
  List,
  ListItem,
  SearchIcon,
  SearchIconWrapper,
  StyledInputBase,
  Button,
  InputLabel,
  TextField,
} from "@mui/material";
import Image from "next/image";
import {H3} from '../listing/Listing';
import { Search } from "@mui/icons-material";

export default function ListingDesign() {

  return (
    <Grid style= {{backgroundColor: "#FFF"}}>    
      <AppBar position="static" style= {{backgroundColor: "#FFF", border: "1px grey"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src="./images/AlphaSearch.svg" width={10} height={0}/>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <List  style= {{color: "black", display: "flex"}}>
          <ListItem>
            Search
          </ListItem>
          <ListItem>
            Lists
          </ListItem>
          <ListItem>
            More
          </ListItem>
      </List>
      <Search style= {{color: "black"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="./images/pictures.svg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Grid sx = {{ display:"flex", height: "auto"}}>
        <H3>Find what you're looking for with 
          <p style = {{color: "rgba(74, 44, 245, 1)"}}>Alphasearch.</p>
          </H3>
          <Image src="./images/ALphaSearchsymbol1.svg" width = {170} height={150}></Image>
      </Grid>
      <Grid style={{width: "30%", height: "50%", 
      border: "1px solid grey", float: "left", backgroundColor: "white", padding: "10px", margin: "40px"}}>
        <Grid>
          <h4>Filter</h4>
          <Button>Clear All</Button>
          <h4>Terms</h4>
          <InputLabel>Include these terms</InputLabel>
          <TextField></TextField>
          <InputLabel>Exclude these terms</InputLabel>
          <TextField></TextField>
          <h4>Operating Model</h4>
          <h5>Industry</h5>
          <InputLabel>Include</InputLabel>
          <TextField></TextField>
          <InputLabel>Exclude</InputLabel>
          <TextField></TextField>
        </Grid>
      </Grid>
    </Grid>

  );
}
