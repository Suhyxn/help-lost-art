import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import AbyssDungeons from "components/GameContents/AbyssDungeons";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge-abyss" element={<AbyssDungeons />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
