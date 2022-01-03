import { useState, useEffect } from "react";

import "./styles/CadrSearch.css";

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
    <>
      <div>
        <input
          placeholder="Search"
          onChange={(event) => {
            console.log("name", event.target.value);
            setInput(event.target.value);
          }}
        />
        <i class="fas fa-search"></i>
      </div>

      {data.map((element) => {
        return (
          <div className="cardSearch">
            <img src={element.album.cover_small} alt={element.title} />
            <div>
              <h1>{element.title}</h1>
              <p>{element.album.title}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
