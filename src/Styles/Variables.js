import styled from "styled-components";

// Styles Text
export const H1 = styled.h1`
  margin: 60px 10px 10px 60px;
  color: white;
`;

export const H1Background = styled.h1`
  text-align: center;
  padding-top: 20px;
  background-color: rgba(0, 0, 0, 0.425);
  color: white;
  position: absolute;
  top: 0;
  width: 100%;
  height: 300px;
`;

export const H2 = styled.h2`
  color: white;
  margin: 10px;
  font-size: 18px;
`;

export const P = styled.p`
  font-size: 12px;
  color: white;
`;

// Buttons
export const Button = styled.a`
  background-color: rgb(207, 0, 86);
  padding: 15px;
  border-radius: 30px;
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: 15px;
`;

export const ButtonIcon = styled.button`
  border: none;
  background-color: rgb(95, 0, 40);
  color: white;
  border-radius: 15px;
  padding: 0px 10px;
  height: 30px;
`;

// Backgrounds

export const Background = styled.div`
  background-color: black;
  position: absolute;
  width: 100vw;
  height: auto;
`;

export const BackgroundCards = styled.div`
  background: linear-gradient(180deg, rgb(12, 12, 12), rgb(44, 44, 44));
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
  padding: 15px;
  width: 50%;
  height: 370px;
`;

// IMG

export const ImgHero = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 0 5px;
`;

// Carrosel

export const Carrossel = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  overflow-x: scroll;
`;
