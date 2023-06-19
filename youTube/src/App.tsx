import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import SearchResponse from "./pages/SearchResponse";
import Channel from "./pages/Channel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:videoId" element={<Watch />} />
        <Route path="/search/:query" element={<SearchResponse />} />
        <Route path="/channel/:channelId" element={<Channel />} />
      </Routes>
    </>
  );
}

export default App;
