import { Grid } from "@mui/material";
import styled from "styled-components";

export const H3 = styled.h3`
font-family: Plus Jakarta Sans;
font-size: 29px;
font-weight: 800;
line-height: 37px;
letter-spacing: 0em;
text-align: left;
`;

export const HeadingGrid = styled(Grid)`
display: flex;
height: auto;
fontFamily: Plus Jakarta Sans;
padding: 20px 56px;
`;


export const Paragraph = styled.p`
color: rgba(74, 44, 245, 1);
font-size: 29px;
`;

export const ImageGrid = styled(Grid)`
margin: auto 5% auto auto;

@media screen and (max-width: 1600px) {
    margin-right: -15px;
}


`;

export const ListingSidebarMain = styled(Grid)`
width: 30%;
height: auto; 
border: 1px solid grey;
float: left;
backgroundColor: white;
margin: 40px; 
border-radius: 10px;
`;

export const SidebarHeadingGrid = styled(Grid)`
display: flex;
border-bottom: 1px solid rgba(88, 89, 91, 1);
padding: 3%;
`;

export const ClearButton = styled.p`
color: #D80000;
font-family: Plus Jakarta Sans;
font-style: normal;
font-weight: 600;
line-height: normal;
padding-left: 70%;

@media screen and (max-width: 1600px) {
  padding-left: 60%;
}

`;