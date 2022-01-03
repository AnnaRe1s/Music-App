import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  H1,
  H2,
  Background,
  BackgroundCards,
  H1Background,
  ImgHero,
  Carrossel,
} from "../Styles/Variables";

import image from "../Assets/image/top-musica.jpeg";
import CardHero from "./CardHero";

const DZ = window.DZ;

export default function Home() {
  const [data, setData] = useState([]);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    DZ.api("/chart/0/albums", function (response) {
      console.log(response.data);
      setData([...response.data]);
    });
  }, []);

  useEffect(() => {
    DZ.api("/chart/0/podcasts", function (response) {
      setPodcasts([...response.data]);
    });
  }, []);

  return (
    <Background>
     
        <CardHero />
   

        <H1>Seus favoritos</H1>
     

      <>
        <H1> Melhores Albums</H1>
        <Carrossel>
          {data.map((element) => {
            return (
              <BackgroundCards>
                <div>
                  <img src={element.cover_medium} alt={element.title} />
                  <H2>{element.title}</H2>
                </div>
                <Button href={element.link} target="_blank">
                  Escute a playlist na Dezzer{" "}
                  <i className="fas fa-volume-up"></i>{" "}
                </Button>
              </BackgroundCards>
            );
          })}
        </Carrossel>
      </>

      <div>
        <div>
          <H1> Melhores Podcast</H1>
          <Carrossel>
            {podcasts.map((element) => {
              return (
                <BackgroundCards>
                  <div>
                    <img src={element.picture_medium} alt={element.title} />
                    <H2>{element.title}</H2>
                  </div>

                  <Button href={element.link} target="_blank">
                    escute a playlist na Dezzer
                  </Button>
                </BackgroundCards>
              );
            })}
          </Carrossel>
        </div>
      </div>
    </Background>
  );
}
