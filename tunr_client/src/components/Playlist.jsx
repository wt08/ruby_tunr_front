import React, { useEffect, useState } from "react";
import axios from "axios";
import EachSong from "./EachSong";
import FaveSong from "./FaveSong";
import SongCreate from "./SongCreate";
import "./playlist.css";

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('')

  useEffect(() => {
    const makeAPICall = async () => {
      axios
        .get(`http://localhost:3000/playlists/2`)
        .then((res) => {
          const data = res.data;
          setPlaylist(data.songs);
          setPlaylistName(data.name)
        })
        .catch(console.error);
    };
    makeAPICall();
  }, []);

  console.log(playlist.name)
  return (
    <div className="Playlist">
      <h2>{playlistName}</h2>
      <EachSong playlist={playlist} />
      <FaveSong playlist={playlist} />
      <SongCreate playlist={playlist} />
    </div>
  );
};

export default Playlist;
