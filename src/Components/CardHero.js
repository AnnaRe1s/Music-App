import { Link } from "react-router-dom";

import image from "../Assets/image/top-musica.jpeg";
import { ImgHero, H1Background, H1, Button } from "../Styles/Variables";

export default function CardHero() {
  return (
    <>
      <Link to="/top10">
        <ImgHero src={image} alt="logo top 10" />
      </Link>

      <H1Background>
        <H1>TOP 10 MELHORES MUSICAS</H1>
        <Link to="/top10" style={{ textDecoration: "none" }}>
          <Button>Saiba Mais</Button>
        </Link>
      </H1Background>
    </>
  );
}
