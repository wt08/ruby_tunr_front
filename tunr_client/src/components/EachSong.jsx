import React from "react";
import axios from "axios";

const EachSong = ({ playlist }) => {
  const handleSubmit = (songId) => {
    axios({
      url: `http://localhost:3000/playlists/2/songs/${songId}`,
      method: "DELETE",
    }).catch(console.error);
  };

  return (
    <div>
      {playlist.map((song) => {
        return (
          <>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <p>{song.time}</p>
            <button onClick={() => handleSubmit(song.id)}>Delete</button>
          </>
        );
      })}
    </div>
  );
};

export default EachSong;
