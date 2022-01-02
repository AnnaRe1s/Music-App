import { Route, Routes } from "react-router-dom";
import FirstPage from "./Page/FirstPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
      </Routes>
    </div>
  );
}

export default App;
