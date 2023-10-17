import styled from "styled-components";
import { Button, Grid } from "@mui/material";

export const BottomMainGrid = styled(Grid)`
  display: flex;
  gap: 20px;
`;

export const BottomGrid = styled(Grid)`
  display: flex;
  gap: 10px;
  border: 1px solid #0000001a;
  width: 30%;
  padding: 10px;
`;

export const AddToListButton = styled(Button)`
  background-color: #4a2cf5;
  color: #ffffff;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;

export const SearchSimilarButton = styled(Button)`
  background-color: rgb(163 152 227);
  color: #4a2cf5;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-transform: capitalize;
  letter-spacing: 0em;
`;

export const SyncButton = styled(Button)`
  background-color: rgb(222 223 225);
  color: #000000;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-transform: capitalize;
  letter-spacing: 0em;
`;
