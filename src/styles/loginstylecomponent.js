import { Image } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import styled from "styled-components";

export const MainDiv = styled(Grid)`
display:flex;
`;

export const Heading = styled(Grid)`
  padding-top: 60px;
  width: 10cm;
`;

export const Wrapper = styled(Grid)`
  margin-top: 30px;
`;

export const MainButton = styled(Button)`
  height: 40px;
  margin-top: 30px;
`;

export const LeftGrid = styled(Grid)`
width:30%;
`; 

export const RightGrid = styled(Grid)`
background-color: blue;
width : 70%;
`;

export const TopImage = styled.img`
width:200px;
height:200px;
`;