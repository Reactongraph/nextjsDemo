import { Button, Grid, InputLabel } from "@mui/material";
import styled from "styled-components";

export const MainGrid = styled(Grid)`
  width: 40%;
  font-size: 13px;
  background: #ffffff;
`;

export const LeftGrid = styled(Grid)`
  margin-left: 100px;
  margin-top: 220px;
  background-color: white;
  width: 426px;
  height: 563px;
  margin-top: 289px;
  margin-left: 203px;
  border-radius: 6px;

  @media screen and (max-width: 400px) {
    font-size: 12px;
    text-align: center;
    margin-top: 50px;
  }

  @media screen and (min-width: 400px) and (max-width: 700px) {
    width: 400px;
    margin-left: 12px;
  }
`;

export const Paragraph = styled.p`
color: #8692A6;
width: 411px
height: 56px
top: 308px
left: 203px
font-family: Plus Jakarta Sans;
font-size: 18px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
margin-top: 20px;

@media screen and (max-width: 400px) {

  font-size: 10px;
  margin-top: 1px;
  text-align: center;
}
@media screen and (min-width: 400px) and (max-width: 700px){
  
    color: black;
  
}
`;

export const Wrapper = styled(Grid)`
  margin-top: 10px;
  
  
`;

export const Labels = styled(InputLabel)`
  width: 116px;
  height: 20px;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #58595b;

  @media screen and (max-width: 400px) {
    font-size: 12px;
    margin-left: 40px;
  }
`;

export const EmailFieldGrid = styled(Grid)`
  width: 426px;
  height: 64px;
  margin-top: 43px;
  border-radius: 6px;
  border: 1px;
  opacity: 0.7px;
  color: #58595b;
  border: 1px solid #58595b;

  @media screen and (max-width: 400px) {
  width: 300px;
  margin-left: -43px;
  height: 56px;
  }
`;

export const PasswordFieldGrid = styled(Grid)`
  width: 426px;
  height: 64px;
  margin-top: 13px;
  border-radius: 6px;
  border: 1px;
  opacity: 0.7px;
  border: 1px solid #58595b;

  @media screen and (max-width: 400px) {
    width: 300px;
    margin-left: -43px;
    height: 56px;
    }
`;
export const MainButton = styled(Button)`
  background: #4a2cf5;
  width: 426px;
  height: 64px;
  border-radius: 6px;
  margin-top: 26px;
  margin-left: 10px;

  @media screen and (max-width: 400px) {
    width: 300px;
    margin-left: -10px;
    height: 56px;
    }
`;

export const Heading = styled(Grid)`
width: 230px
height: 38px
top: 259px
left: 203px
font-family: Plus Jakarta Sans;
font-size: 30px;
font-weight: 700;
line-height: 38px;
letter-spacing: 0em;
text-align: left;
color: #000000;

@media screen and (max-width: 400px) {
  font-size: 12px;
  text-align: center;
}
`;
