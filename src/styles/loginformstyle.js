import {
  Button,
  FilledInput,
  Grid,
  InputLabel,
  Link,
  TextField,
} from "@mui/material";
import styled from "styled-components";

export const MainGrid = styled(Grid)`
  width: 30%;
  margin: auto;
  background: #ffffff;
  justify-content: center;
  display: flex;

  @media screen and (max-width: 900px) {
    padding-left: 15px;
    margin: auto;
    margin-top: 20%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100vh;
    margin-top: 30%;
  }
`;

export const LeftGrid = styled(Grid)``;

export const Paragraph = styled.p`
  color: #8692a6;
  font-family: Plus Jakarta Sans;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  padding-top: 10px;

  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Wrapper = styled(Grid)`
  width: 100%;
`;

export const Labels = styled(InputLabel)`
  font-family: Plus Jakarta Sans;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  padding-bottom: 20px;
  font-size: 18px;
  color: #58595b;
  top: 40px;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const TextField1 = styled(TextField)`
  width: 100%;

  @media screen and (max-width: 1000px) {
    width: 600px;
  }

  @media screen and (max-width: 900px) {
    width: 350px;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;

export const TextField2 = styled(FilledInput)`
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const EmailFieldGrid = styled(Grid)`
  width: 100%;
  height: 57px;
  margin-top: 30px;
  border-radius: 6px;
  border: 1px;
  opacity: 0.7px;
  color: #58595b;
  border: 1px solid #58595b;

  @media screen and (max-width: 1000px) {
    width: 600px;
  }

  @media screen and (max-width: 900px) {
    width: 350px;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;

export const PasswordFieldGrid = styled(Grid)`
  width: 100%;
  height: 57px;
  margin-top: 30px;
  border-radius: 6px;
  border: 1px;
  opacity: 0.7px;
  border: 1px solid #58595b;

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;

export const ShowButton = styled(Button)`
  color: black;
  padding-left: 100px;

  @media screen and (max-width: 1000px) {
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const MainButton = styled(Button)`
  background: #4a2cf5;
  border-radius: 6px;
  padding: 20px;
  margin: 5px;
  width: 100%;

  @media screen and (max-width: 1000px) {
    width: 600px;
  }

  @media screen and (max-width: 900px) {
    width: 350px;
  }

  @media screen and (max-width: 600px) {
    width: 310px;
  }
`;

export const Heading = styled(Grid)`
  width: 100%;
  font-family: Plus Jakarta Sans;
  font-size: 30px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;

export const CheckField = styled(InputLabel)`
  font-family: Plus Jakarta Sans;
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const LinkGrid = styled(Grid)`
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const LinkField = styled(Link)`
  font-family: Plus Jakarta Sans;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0em;
  color: #4A2CF5";

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
