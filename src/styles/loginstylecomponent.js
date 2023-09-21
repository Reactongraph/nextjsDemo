import { Button, Grid } from "@mui/material";
import styled from "styled-components";

export const MainDiv = styled(Grid)`
  display: flex;
`;

export const Heading = styled(Grid)`
  padding-top: 10px;

`;

export const Paragraph = styled.p`
color: #8692A6;

`;

export const Wrapper = styled(Grid)`
  margin-top: 10px;
`;

export const MainButton = styled(Button)`
  height: 40px;
  width: 260px;
  margin-top: 5px;
  margin-left: 2px;
font-weight: 600;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
background: #4A2CF5;


`;

export const LeftGrid = styled(Grid)`
  margin-left: 70px;
  margin-top: 70px;
  width: 250px;
  height: 300px;
  text-align: left;
  background-color: white;
`;

export const RightGrid = styled(Grid)`
background: #4A2CF5;
  width: 60%;
  background-image: "./images/Rectangle 3.svg";
`;

export const TopImage = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 250px;
  margin-top: 30px;
`;

export const LeftHeading = styled.p`
  font-family: Plus Jakarta Sans;
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  margin-left: 80px;
  margin-top: -30px;
`;

export const BottomImage = styled.img`
  width: 693px;
  height: 379px;
  top: 367px;
  left: 887px;
`;

export const SideImage = styled.img`
  width: 50px;
  height: 50px;
  color: white;
`;

export const MainGrid = styled(Grid)`
  width: 40%;
  font-size: 13px;
  background-color: white;
`;
