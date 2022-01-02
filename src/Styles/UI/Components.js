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
   padding: 15px 165px;
   border-radius: 60px;s
   border: none;
   margin: 45px 0;
   font-size: 30px;
  
  };
`;

export const H1 = styled.h1`
  color: ${whiteColor};
  font-size: 20px;
  margin: 4px;

  @media screen and (min-width: 600px) {
    font-size: 45px;
    margin: 8px;
  }
`;

export const Subtitle = styled.p`
  margin: 15px;
  color: ${whiteColor};
  font-size: 12px;

  @media screen and (min-width: 600px) {
    font-size: 30px;
  }
`;
