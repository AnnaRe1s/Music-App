import styled from "styled-components";
import { greenColor, whiteColor } from "./VariableColor";

export const Button = styled.a`
  background-color: ${greenColor};
  color: ${whiteColor};
  text-align: center;
  padding: 5px 80px;
  border-radius: 20px;
  border: none;
  margin: 15px 0;
  text-decoration: none;

  @media screen and (min-width: 600px){
   background-color: ${greenColor};
   color: ${whiteColor};
   text-align: center;
   padding: 15px 130px;
   border-radius: 60px;
   border: none;
   margin: 30px 0;
   font-size: 20px;
  
  };
`;

export const H1 = styled.h1`
  color: ${whiteColor};
  font-size: 18px;
  margin: 4px;

  @media screen and (min-width: 600px) {
    font-size: 35px;
    margin: 8px;
  }
`;

export const Subtitle = styled.p`
  margin: 15px;
  color: ${whiteColor};
  font-size: 12px;

  @media screen and (min-width: 600px) {
    font-size: 16px;
  }
`;
