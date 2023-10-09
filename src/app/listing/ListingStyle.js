import {
  AppBar,
  Grid,
  Paper,
  InputLabel,
  TextField,
  Link,
  Button,
  ToggleButton,
  Slider,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import styled from "styled-components";
import Image from "next/image";

export const ListingPageMain = styled(Grid)`
  background-color: #fff;
`;
export const AppBarMain = styled(AppBar)`
  background-color: #fff;
  border: 1px grey;
  position: static;
`;

export const AppBarInnerGrid = styled(Grid)`
  margin: 0px 2%;
  display: flex;
  width: 100%;

  @media screen and (max-width: 900px) {
    justify-content: space-between;
  }
`;

export const AppBarLeftGrid = styled(Grid)`
  width: 70%;
  display: flex;
  align-items: center;
  padding-left: 1%;
  gap: 40px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const AppBarRightGrid = styled(Grid)`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const AppBarExtendedGrid = styled(Grid)`
  display: none;

  @media screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2% 8%;
  }
`;

export const SearchButton = styled(Button)`
  width: 70px;
  text-align: center;
  padding: 20px;
  background-color: rgba(74, 44, 245, 0.19);
  border-bottom: 2px solid rgba(74, 44, 245, 1);
  color: rgba(74, 44, 245, 1);
`;

export const SideSearchButtonGrid = styled(Grid)`
  width: 100%;
  text-align: center;
  padding: 20px;
  background-color: rgba(74, 44, 245, 0.19);
  border-bottom: 2px solid rgba(74, 44, 245, 1);
  color: rgba(74, 44, 245, 1);
`;

export const PaperSearch = styled(Paper)`
  padding: 2px 4px;
  width: 100%;
  display: flex;
  align-items: center;
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
    display: flex;
    margin-top: 10px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 8px;
    margin-right: 2%;
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

export const DrawerHeader = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Image1 = styled(Image)`
  margin-right: -37%;
`;

export const ModalGrid = styled(Grid)`
  display: none;

  @media screen and (max-width: 900) {
    display: contents;
    width: 100%;
    height: 100%;
    background-color: grey;
  }
`;

export const ListingSidebarMain = styled(Grid)`
  width: 30%;
  height: 100%;
  border: 1px solid grey;
  float: left;
  background-color: white;
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

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`;

export const H4 = styled.h4`
  padding: 2%;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`;
export const FilterButton = styled(Button)`
  padding: 2%;
  color: rgba(0, 0, 0, 1);
  font-weight: 700;

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

export const TextGrid = styled(Grid)`
  display: flex;
`;

export const SliderStyle = styled(Slider)`
  color: rgba(74, 44, 245, 1);
  width: 92%;
  margin: auto 15px;
`;

export const FilterBottomGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 34px;
`;

export const FilterHideGrid = styled(Grid)`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    align-item: center;
  }
`;

export const ContentAreaGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  gap: 44px;
  margin-top: 30px;
  margin-right: 25px;
`;

export const DataMainGrid = styled(Grid)`
  border: 1px solid grey;
  border-radius: 10px;
  padding: 8px;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`;

export const ContentLeftGrid = styled(Grid)`
  margin: 15px;

  @media screen and (max-width: 900px) {
    width: 20%;
  }
`;

export const ContentRightGrid = styled(Grid)`
  @media screen and (max-width: 900px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ContentTitleGrid = styled(Grid)``;

export const ListUl = styled.ul`
  display: flex;
  padding: 15px 0px;
  width: 100%;

  @media screen and (max-width: 600px) {
    display: inline-block;
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
  font-size: 18px;

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
