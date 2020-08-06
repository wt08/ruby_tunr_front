import React, { useEffect, useState } from "react";
import axios from "axios";
import EachSong from "./EachSong";
import FaveSong from './FaveSong'

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);
  console.log(playlist);

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
      <FaveSong playlist={playlist}/>
    </div>
  );
};

export default Playlist;
