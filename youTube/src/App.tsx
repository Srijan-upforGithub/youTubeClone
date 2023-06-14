import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:videoId" element={<Watch />} />
      </Routes>
    </>
  );
}

export default App;
