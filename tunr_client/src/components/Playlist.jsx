import React, { useEffect, useState } from "react";
import axios from "axios";
import EachSong from "./EachSong";
import FaveSong from "./FaveSong";
import SongCreate from "./SongCreate";

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      axios
        .get(`http://localhost:3000/playlists/2`)
        .then((res) => {
          const data = res.data;
          setPlaylist(data.songs);
        })
        .catch(console.error);
    };
    makeAPICall();
  }, []);

  return (
    <div>
      <EachSong playlist={playlist} />
      <FaveSong playlist={playlist} />
      <SongCreate playlist={playlist} />
    </div>
  );
};

export default Playlist;
