import { Grid } from "@mui/material";
import styled from "styled-components";

export const MainDiv = styled(Grid)`
  display: flex;
  width: 100%;
  background-color: white;
`;

export const RightGrid = styled(Grid)`
  background: #4a2cf5;
  width: 70%;
  background-image: url("./images/Rectangle.svg");
  position: relative;

  @media screen and (max-width: 900px) {
    display: none;
  }

  @media screen and (max-width: 1600px) {
    width: 60%;
  }
`;

export const LeftSideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 14%;

  @media screen and (max-width: 1600px) {
    width: 20%;
    height: 8%;
  }
`;

export const RightSideImage = styled.img`
  width: 30%;
  height: 14%;
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (max-width: 1600px) {
    width: 20%;
    height: 8%;
  }
`;

export const LeftHeading = styled.p`
  font-family: Plus Jakarta Sans;
  font-size: 46px;
  font-weight: 800;
  line-height: 58px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;

  @media screen and (max-width: 1600px) {
    padding: auto;
  }
`;

export const HeadingGrid = styled(Grid)`
  width: fit-content;
  height: auto;
  text-align: center;
  margin: auto;
  padding-top: 70px;

  @media screen and (max-width: 1600px) {
    margin: 10px auto;
  }
`;

export const BottomImage = styled.img`
  width: 100%;
`;
