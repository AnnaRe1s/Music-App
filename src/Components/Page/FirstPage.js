import { Link } from "react-router-dom";

// image
import logo from "../../Assets/image/logo_100.png";

import background from "../../Assets/image/backgroound_blur.png";

// css
import "./FirsPage.css";
import { Button, H1, Subtitle} from "../../Styles/UI/Components";

export default function FirstPage() {
  return (
    <div>
      <img src={background} alt="background" className="background" />
      <div className="blur">
        <div className="background__acesse">
          <img src={logo} alt="Spotify Logo" className="logo" />
          <H1>Millions of songs.</H1>
          <H1>Gratis no Spotify.</H1>
          <Button href="/login"> Log In</Button>
          <Subtitle>
            Don't have an account? <Link to="/signup">SIGN UP</Link>
          </Subtitle>
        </div>
      </div>
    </div>
  );
}
