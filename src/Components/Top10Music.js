import { useState, useEffect } from "react";
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
    <>
      {data.map((element) => {
        return (
          <div key={element.id}>
            <img
              src={element.artist.picture_medium}
              alt={`music ${element.title}`}
            />

            <p>{element.title}</p>
            <p>{element.artist.name}</p>
            <p>{element.duration}</p>
            <a href={element.link} target="blank">
              text
            </a>
            <button
              onClick={() => {
                console.log("===", element)
                element.like = true;

              }}
            >
              favoritos
            </button>

            <button
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
              Play/Pause
            </button>
          </div>
        );
      })}
    </>
  );
}
