import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import SearchResponse from "./pages/SearchResponse";
import Channel from "./pages/Channel";
import Featured from "./pages/ChannelLinkPage/Featured";
import Video from "./pages/ChannelLinkPage/Video";
import Playlist from "./pages/ChannelLinkPage/Playlist";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:videoId" element={<Watch />} />
        <Route path="/search/:query" element={<SearchResponse />} />
        <Route path="/channel/:channelId" element={<Channel />}>
          <Route index element={<Featured/>}/>
          <Route path="featured" element={<Featured/>}/>
          <Route path="videos" element={<Video/>}/>
          <Route path="playlist" element={<Playlist/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
