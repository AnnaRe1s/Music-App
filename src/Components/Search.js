import { useState, useEffect } from "react";

import "./styles/CadrSearch.css";
import { Input, H2, P, BackgroundSearch, H1, Links } from "../Styles/Variables";

const DZ = window.DZ;

export default function HomePage() {
  const [input, setInput] = useState(" ");
  const [data, setData] = useState([]);

  useEffect(() => {
    DZ.api(`search?q=${input}`, function (response) {
      console.log("response", response.data);
      setData([...response.data]);
    });
  }, [input]);

  return (
    <div>
      <div className="styledInput">
        <H1>Pesquise</H1>
        <Input
          className="input"
          placeholder="Search"
          onChange={(event) => {
            console.log("name", event.target.value);
            setInput(event.target.value);
          }}
        />
      </div>

      {data.map((element) => {
        return (
          <BackgroundSearch>
            <Links href={element.link} target="_blank">
              <img src={element.album.cover_small} alt={element.title} />
              <div>
                <H2>{element.title}</H2>
                <P>{element.album.title}</P>
              </div>
            </Links>
          </BackgroundSearch>
        );
      })}
    </div>
  );
}
