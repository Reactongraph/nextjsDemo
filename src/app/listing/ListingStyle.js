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
} from "@mui/material";
import { Search } from "@mui/icons-material";
import styled from "styled-components";
import Image from "next/image";

export const ListingPageMain = styled(Grid)`
backgroundColor: #FFF;
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
`;

export const ListStyle = styled(List)`
  color: black;
  display: flex;
  margin-left: 3%;
`;

export const SearchButtonGrid = styled(Grid)`
  font-family: Plus Jakarta Sans;
  height: auto;
  width: 70px;
  text-align: center;
  padding-top: 20px;
  background-color: rgba(74, 44, 245, 0.19);
  border-bottom: 2px solid rgba(74, 44, 245, 1);
`;

export const InputSearchLabel = styled(InputLabel)`
  color: rgba(74, 44, 245, 1);
`;

export const PaperSearch = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 35%;
  height: 40%;
  margin: auto 2% auto auto;
`;

export const SearchStyle = styled(Search)`
  color: rgba(71, 100, 246, 1);
`;

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
  fontfamily: Plus Jakarta Sans;
  padding: 20px 56px;
`;

export const Paragraph = styled.p`
  color: rgba(74, 44, 245, 1);
  font-size: 29px;
`;

export const ContentArea = styled(Grid)`
display: flex;
`;

export const ImageGrid = styled(Grid)`
  margin: auto 5% auto auto;

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
  margin: 40px;
  border-radius: 10px;
`;

export const SidebarHeadingGrid = styled(Grid)`
  display: flex;
  border-bottom: 1px solid rgba(88, 89, 91, 1);
  padding: 2%;
  justify-content: space-between;
`;

export const H4 = styled.h4`
  padding: 2%;
`;

export const H5 = styled.h5`
  padding: 2%;
`;

export const ClearButton = styled(Button)`
  color: #d80000;
  font-family: Plus Jakarta Sans;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const InputStyle = styled(InputLabel)`
  padding: 2%;
`;

export const TextFieldStyle = styled(TextField)`
  padding: 2%;
  width: 100%;
`;

export const ListingContentGrid = styled(Grid)`
  width: 70%;
  marginright: 4px;
`;

export const DataMainGrid = styled(Grid)`
  border: 1px solid grey;
  border-radius: 10px;
  margin: 15px auto;
  padding: 8px;
`;

export const ContentImgGrid = styled(Grid)`
  padding: 5px;
  margin: 5px;
`;

export const ListUl = styled.ul`
  display: flex;
  padding: 15px 0px;
`;
export const ContentLink = styled(Link)`
  color: rgba(71, 100, 246, 1);
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const CountGrid = styled(Grid)`
  color: rgba(206, 99, 0, 1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 242, 230, 1);
`;
export const LocationGrid = styled(Grid)`
  color: rgba(153, 0, 206, 1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 230, 255, 1);
`;

export const Description = styled.p`
  color: rgba(88, 89, 91, 1);
  fontsize: 18px;
`;

export const Li = styled.li`
  margin: auto 25px;
`;

export const ContentHeadGrid = styled(Grid)`
  display: flex;
`;
