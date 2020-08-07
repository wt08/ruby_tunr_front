import React from "react";
import axios from "axios";

const FaveSong = ({ playlist }) => {
  const handleSubmit = (songId) => {
    axios({
      url: `http://localhost:3000/playlists/2/songs/${songId}`,
      method: "DELETE",
    })
    .then(() => window.location.reload(false))
    .catch(console.error);
  };
  return (
    <div>
      <h2>Faves</h2>
      {playlist.map((song) => {
        if (song.isFave) {
          return (
            <>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
              <p>{song.time}</p>
              <button onClick={() => handleSubmit(song.id)}>Delete</button>
            </>
          );
        }
      })}
    </div>
  );
};

export default FaveSong;
