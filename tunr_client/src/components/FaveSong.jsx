import React from "react";
import axios from "axios";
import UnfaveButton from './UnfaveButton'
import "./faveSong.css";
import Card from "react-bootstrap/Card";


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
            <Card body>
              <div className="oneSong">
              <h3 className="unit">{song.title}</h3>
              <p className="unit">{song.artist}</p>
              <p className="unit">{song.time}</p>
              <UnfaveButton className="unit" id={song.id}/>
              <button className="unit" onClick={() => handleSubmit(song.id)}>Delete</button>
              </div>
            </Card>
          );
        }
      })}
    </div>
  );
};

export default FaveSong;
