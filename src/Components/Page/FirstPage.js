import { Link } from "react-router-dom";

// image
import logo from "../../Assets/image/logo_100.png";

import background from "../../Assets/image/backgroound_blur.png";

// css
import "./FirsPage.css";

export default function FirstPage() {
  return (
    <div>
      <img src={background} alt="background" className="background" />
      <div className="blur">
        <div className="background__acesse">
          <img src={logo} alt="Spotify Logo" className="logo" />
          <h1>MILLIONS OF SONGS </h1>
          <h1>GRATIS NO SPOTIFY</h1>
          <button>Log In</button>
          <p>
            Don't have an account? <Link to="/signup">sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
