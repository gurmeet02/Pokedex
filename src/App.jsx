import HomePage from "./pages/HomePage/HomePage";
import PokePage from "./pages/PokePage/PokePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<PokePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
