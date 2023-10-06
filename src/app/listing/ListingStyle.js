import {
  AppBar,
  Grid,
  Toolbar,
  List,
  Paper,
  InputLabel,
  TextField,
  Link,
  Button,
  ToggleButton,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import styled from "styled-components";
import Image from "next/image";

export const ListingPageMain = styled(Grid)`
  background-color: #fff;
  height: 100vh;
`;
export const AppBarMain = styled(AppBar)`
  background-color: #fff;
  border: 1px grey;
  position: static;
`;

export const ToolbarStyle = styled(Toolbar)`
  margin-left: 2%;
  height: 64px;

  @media screen and (max-width: 900px) {
    justify-content: space-between;
  }
`;

export const NavSideGrid = styled(Grid)`
  display: flex;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const ListStyle = styled(List)`
  color: black;
  display: flex;
  margin-left: 3%;
`;

export const SearchButtonGrid = styled(Grid)`
  width: 70px;
  text-align: center;
  padding-top: 20px;
  background-color: rgba(74, 44, 245, 0.19);
  border-bottom: 2px solid rgba(74, 44, 245, 1);
  margin-right: 33px;
  margin-left: 25px;
`;

export const InputSearchLabel = styled(InputLabel)`
  color: rgba(74, 44, 245, 1);
`;

export const PaperSearch = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 50%;
  height: 40%;
  margin: auto 2% auto auto;

  @media screen and (max-width: 900px) {
    width: 10%;
    align-items: center;
  }
`;

export const SearchStyle = styled(Search)`
  color: rgba(71, 100, 246, 1);
`;

export const ToggleStyle = styled(ToggleButton)`
  display: none;

  @media screen and (max-width: 900px) {
    display: contents;
  }
`;

export const ToggleStyleGrid = styled(Grid)`
  display: none;

  @media screen and (max-width: 900px) {
    display: contents;
  }
`;

export const H3 = styled.h3`
  font-size: 29px;
  font-weight: 800;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: left;

  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;

export const HeadingGrid = styled(Grid)`
  display: flex;
  height: auto;
  padding: 20px 56px;
  justify-content: space-between;
`;

export const Paragraph = styled.p`
  color: rgba(74, 44, 245, 1);
  font-size: 29px;

  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;

export const ContentArea = styled(Grid)`
  display: flex;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

export const ImageGrid = styled(Grid)`
  @media screen and (max-width: 1600px) {
    margin-right: -15px;
  }
`;

export const Image1 = styled(Image)`
  margin-right: -37%;
`;

export const ListingSidebarMain = styled(Grid)`
  width: 30%;
  height: 100%;
  border: 1px solid grey;
  float: left;
  backgroundcolor: white;
  margin: 53px 90px auto 60px;
  border-radius: 10px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const SidebarHeadingGrid = styled(Grid)`
  display: flex;
  border-bottom: 1px solid rgba(88, 89, 91, 1);
  padding: 2%;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`;

export const H4 = styled.h4`
  padding: 2%;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`;

export const H5 = styled.h5`
  padding: 2%;

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`;

export const ClearButton = styled(Button)`
  color: #d80000;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const InputStyle = styled(InputLabel)`
  padding: 2%;
  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`;
export const InputStyle2 = styled(InputLabel)`
  font-size: 14px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(0, 0, 0, 1);
  padding: 2%;
`;

export const TextFieldStyle = styled(TextField)`
  padding: 2%;
  width: 100%;

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`;

export const ListingContentGrid = styled(Grid)`
  width: 70%;
  margin-right: 4px;
`;

export const FilterHideGrid = styled(Grid)`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    align-item: center;
  }
`;
export const DataMainGrid = styled(Grid)`
  border: 1px solid grey;
  border-radius: 10px;
  margin: 44px auto;
  padding: 8px;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`;

export const ContentImgGrid = styled(Grid)`
  padding: 5px;
  margin: 5px;
`;

export const ListUl = styled.ul`
  display: flex;
  padding: 15px 0px;

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;
export const ContentLink = styled(Link)`
  color: rgba(71, 100, 246, 1);
  cursor: pointer;
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const CountGrid = styled(Grid)`
  color: rgba(206, 99, 0, 1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 242, 230, 1);

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;
export const LocationGrid = styled(Grid)`
  color: rgba(153, 0, 206, 1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 230, 255, 1);

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const Description = styled.p`
  color: rgba(88, 89, 91, 1);
  fontsize: 18px;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`;

export const Li = styled.li`
  margin: auto 25px;
`;

export const ContentHeadGrid = styled(Grid)`
  display: flex;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`;
