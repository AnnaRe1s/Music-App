import { useState, useEffect } from "react";
import api from "../../../API/api";

export default function ListPage() {
  const [playList, setPalyList] = useState([]);

  useEffect(() => {
    async function fetchMusic() {
      try {
        const response = await api.get("/album/302127");

        console.log("fetchMusic", response.data);

        setPalyList([...response]);
      } catch (err) {
        console.error("caiu no erro", err);
      }
    }

    fetchMusic();
  }, []);

  console.log("state", playList);

  return (
    <div>
      <div>
        <h3>Playlist</h3>
        <h1>Top musicas do momento </h1>
        <p>total de musicas</p>
        <p>total de horas da playlist</p>
      </div>

      <div>
        <button>Button play</button>
        <button>Like</button>
        <input placeholder="search" />
      </div>

      <div>
        <p>Number</p>
        <p>image</p>
        <div>
          <p>name music</p>
          <p>Name singer</p>
        </div>
        <p>Album </p>
        <p>Hours</p>
      </div>
    </div>
  );
}
