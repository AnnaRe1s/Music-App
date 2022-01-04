import styled from "styled-components";

// Styles Text
export const H1 = styled.h1`
  margin: 60px 23px 0px 25px;
  color: white;
  font-size: 25px;

  @media screen and (min-width: 600px) {
    margin: 60px 10px 10px 60px;
    font-size: 35px;
  }
`;

export const H1Background = styled.h1`
  text-align: center;
  padding-top: 20px;
  background-color: rgba(0, 0, 0, 0.425);
  color: white;
  position: absolute;
  top: 0;
  width: 100%;
  height: 280px;

  @media screen and (min-width: 600px) {
    font-size: 40px;
  }
`;

export const H2 = styled.h2`
  color: white;
  font-size: 16px;
  margin-bottom: 25px;

  @media screen and (min-width: 600px) {
    font-size: 18px;
    margin: 10px;
  }
`;

export const P = styled.p`
  font-size: 12px;
  color: white;
  margin-bottom: 5px;

  @media screen and (min-width: 600px) {
    font-size: 14px;
  }
`;

// Buttons
export const Button = styled.a`
  background-color: rgb(207, 0, 86);
  padding: 7px;
  border-radius: 30px;
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: 12px;

  @media screen and (min-width: 600px) {
    padding: 15px;
    font-size: 15px;
  }
`;

export const ButtonIcon = styled.button`
  border: none;
  background-color: rgb(95, 0, 40);
  color: white;
  border-radius: 15px;
  padding: 0px 10px;
  height: 30px;
  margin: 15px 3px;
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
  height: 260px;

  @media screen and (min-width: 600px) {
    height: 370px;
  }
`;

// IMG

export const ImgHero = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 0 5px;
`;

export const ImgCards = styled.img`
  width: 160px;

  @media screen and (min-width: 600px) {
    width: 250px;
  }
`;

export const Img = styled.img`
  height: 150px;
  width: 185px;
  margin-bottom: 25px;

  @media screen and (min-width: 600px) {
  }
`;

// Carrosel

export const Carrossel = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  overflow-x: scroll;
`;

// Divs

export const SectionRow = styled.div`
  margin: 20px;
  background: linear-gradient(180deg, rgb(12, 12, 12), rgb(44, 44, 44));
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Cards = styled.div`
  background: linear-gradient(180deg, rgb(12, 12, 12), rgb(44, 44, 44));
  margin: 10px 75px;
  display: flex;
  flex-direction: column;
  width: 187px;
  padding: 20px;
  height: 338px;

  @media screen and (min-width: 600px) {
    
    background: linear-gradient(180deg, rgb(12, 12, 12), 
    margin: 20px;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-around
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    width: 550px;
  }
`;