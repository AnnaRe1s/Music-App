import { Route, Routes } from "react-router-dom";
import FirstPage from "./Page/FirstPage/FirstPage";
import ListPage from "./Page/ListPage/ListPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/homePage" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default App;
