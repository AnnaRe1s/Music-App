import { useState, useEffect } from "react";

import "./styles/Home.css";
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
    <div className="background">
      <div>
          <Link to=""></Link>
      </div>
      <div>
        <h1>Seus favoritos</h1>
      </div>

      <div>
        <h1> Melhores Albums</h1>
        <div className="carrosel">
          {data.map((element) => {
            return (
              <div className="container">
                <div>
                  <img src={element.cover_medium} alt={element.title} />
                  <h2>{element.title}</h2>
                </div>
                <div className="text__card">
                  <a href={element.link}>Escute a playlist na Dezzer <i className="fas fa-volume-up"></i> </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div>
          <h1> Melhores Podcast</h1>
          <div className="carrosel">
            {podcasts.map((element) => {
              return (
                <div className="container">
                  <div>
                    <img src={element.picture_medium} alt={element.title} />
                  </div>
                  <div className="text__card">
                    <h2>{element.title}</h2>
                    <a href={element.link} target="blank">
                      escute a playlist na Dezzer
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
