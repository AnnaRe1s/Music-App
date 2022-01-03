import { Routes, Route } from "react-router-dom";

import Search from "./Components/Search";
import Top10Music from "./Components/Top10Music";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/top10" element={<Top10Music />} />
    </Routes>
  );
}

export default App;
