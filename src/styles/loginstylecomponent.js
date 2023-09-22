import { Grid } from "@mui/material";
import styled from "styled-components";

export const MainDiv = styled(Grid)`
  display: flex;
  width: 1920px;
height: 1080px;

`;

export const LeftSideImage = styled.img`
  width: 400px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const RightSideImage = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const LeftHeading = styled.p`
  width: 761px
height: 116px
top: 203px
left: 992px
font-family: Plus Jakarta Sans;
font-size: 46px;
font-weight: 800;
line-height: 58px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;

`;

export const RightGrid = styled(Grid)`
  background: #4a2cf5;
  width: 60%;
  background-image: url("./images/Rectangle.svg");
  position: relative;

  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const TopImage = styled.img`
  width: 290px;
  height: 54.59px;
  margin-top: 129px;
`;
export const HeadingGrid = styled(Grid)`
  width: 761px;
  height: 190px;
  top: 129px;
  left: 992px;
  text-align: center;
  margin-left: 250px;
  margin-top: 100px;
`;

export const BottomImage = styled.img`
  width: 1293px;
  height: 669px;
  margin-top: 117px;
  color: #ffffff;
`;


