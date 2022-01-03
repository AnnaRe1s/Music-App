import { useState, useEffect } from "react";

import { Button, Background, H2, P, ButtonIcon } from "../Styles/Variables";
import CardHero from "./CardHero";
import "./styles/CadrSearch.css";

const DZ = window.DZ;

export default function Top10Music() {
  const [data, setData] = useState([]);

  useEffect(() => {
    DZ.api("/chart/0/tracks", function (response) {
      const tracks = response.data.map((track) => {
        const durationMin = Math.floor(track.duration / 60);

        const durationSec = Math.floor(track.duration % 60);

        track.duration = `${durationMin}:${durationSec}`;

        track["audio"] = new Audio(track.preview);

        track["like"] = false;

        return track;
      });

      setData([...tracks]);
    });
  }, []);

  return (
    <Background>
      <CardHero />
      {data.map((element) => {
        return (
          <div className="card__top__10" key={element.id}>
            <div className="info">
              <img
                className="img__Top__10"
                src={element.artist.picture_medium}
                alt={`music ${element.title}`}
              />
              <div>
                <H2>{element.title}</H2>
                <P>{element.artist.name}</P>
              </div>
            </div>

            <P>
              <i class="far fa-clock"></i> {element.duration}
            </P>

            <ButtonIcon
              onClick={() => {
                console.log("===", element);
                element.like = true;
              }}
            >
              <i class="fas fa-heart"></i>
            </ButtonIcon>

            <ButtonIcon
              name={element.title}
              type="button"
              onClick={() => {
                if (element.audio.paused) {
                  console.log("tocou");
                  element.audio.play();
                } else {
                  console.log("pause");
                  element.audio.pause();
                }
              }}
            >
              <i class="fas fa-play"></i> / <i class="fas fa-pause"></i>
            </ButtonIcon>

            <Button href={element.link} target="blank">
              Escute na Dezzer <i class="fas fa-volume-up"></i>
            </Button>
          </div>
        );
      })}
    </Background>
  );
}
