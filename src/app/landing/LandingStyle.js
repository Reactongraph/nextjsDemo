import styled from "styled-components";
import { Grid } from "@mui/material";
import Image from "next/image";

export const LandingHeadingGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  height: 157px;
  background-color: #f6f4ff;

  @media screen and (max-width: 900px) {
    height: 100px;
  }
`;

export const H3Grid = styled(Grid)`
  margin: auto;
`;

export const H3 = styled.h3`
  font-size: 29px;
  font-weight: 800;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: center;

  @media screen and (max-width: 1600px) {
    font-size: 22px;
  }
  @media screen and (max-width: 900px) {
    position: relative;
    right: 70px;
    font-size: 18px;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const AlphaImage = styled(Image)`
  position: relative;
  right: 70px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const PaperGrid = styled(Grid)`
  box-shadow: 0px 4px 14px 0px rgba(74, 44, 245, 0.2);
  width: 60%;
  height: 80px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;

  @media screen and (max-width: 900px) {
    height: 40px;
    width: 70%;
  }
`;

export const LeftGrid = styled(Grid)`
  display: flex;
  align-items: center;
  width: 80%;
`;

export const RightGrid = styled(Grid)`
  display: flex;
  border-left: 1px solid rgba(88, 89, 91, 0.3);
  color: rgba(88, 89, 91, 0.3);

  gap: 8px;
  padding: 20px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const LandingPageMain = styled(Grid)`
  background-color: white;
  width: 100%;
  height: 200vh;
`;

export const LandingScreenGrid = styled(Grid)`
  display: flex;
  gap: 20px;
  margin: 3% 3% 0px 0px;

  @media screen and (max-width: 1600px) {
    flex-direction: column;
  }

  @media screen and (max-width: 900px) {
    margin-left: 3%;
  }
`;

export const AllCompaniesGrid = styled(Grid)`
  background-color: rgba(246, 244, 255, 1);
  display: flex;
  width: 100%;
  height: 100%;
  padding: 50px;
  justify-content: space-evenly;
  align-items: center;
`;
