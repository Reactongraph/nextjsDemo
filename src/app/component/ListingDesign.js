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
  SearchIcon,
  SearchIconWrapper,
  StyledInputBase,
  Paper,
  InputBase,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import Image from "next/image";
import {H3, Paragraph, HeadingGrid, ImageGrid} from '../listing/ListingStyle';
import { Search } from "@mui/icons-material";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

export default function ListingDesign() {

  return (
    <Grid>    
      <AppBar position="static" style= {{backgroundColor: "#FFF", border: "1px grey"}} >
      <Container maxWidth="xl">
        <Toolbar>
          <Image src="/images/AlphaSearch.svg" width={50} height={50}/>
      
          <List  style= {{color: "black", display: "flex"}}>
            <Grid style = {{
                  color: "rgba(74, 44, 245, 1)",
                  fontFamily:"Plus Jakarta Sans",
                  height: "auto", 
                  width: "70px",
                  textAlign:"center",
                  paddingTop: "20px",
                  backgroundColor: "blueviolet"}}>
          <InputLabel id="demo-simple-select-standard-label">Search</InputLabel>
          </Grid>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 70}}>
        <InputLabel id="demo-simple-select-standard-label">Lists</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Lists"
        ></Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 70}}>
        <InputLabel id="demo-simple-select-standard-label">More</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="More"
        ></Select>
        </FormControl>
          
      </List>
      <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',width: "40%", height: "40%", margin: "auto 2% auto auto"}}>
      <Search style= {{color: "rgba(71, 100, 246, 1)"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search a term, industry, or a specific company"/>
          <QueryBuilderIcon style={{color: "grey"}}/>
          </Paper>
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
    <HeadingGrid>
        <H3>Find what you're looking for with 
          <Paragraph>Alphasearch.</Paragraph>
          </H3>
          <ImageGrid>
          <Image src="./images/ALphaSearchsymbol2.svg" width = {100} height={80}
          style={{marginRight: "-37%"}} />
          <Image src="./images/ALphaSearchsymbol1.svg" width = {100} height={80} 
          />
          </ImageGrid>
         
      </HeadingGrid>
    </Grid>

  );
}
