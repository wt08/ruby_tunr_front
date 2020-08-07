import React from "react";
import axios from "axios";
import UnfaveButton from "./UnfaveButton";
import "./faveSong.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";


const FaveSong = ({ playlist }) => {

  const convertSeconds = (seconds) => {
    let minutes = Math.floor(seconds/60)
    let remaining = seconds - minutes *60;
    if (remaining > 9) {
      return `${minutes}:${remaining}`
    } else {
      return `${minutes}:0${remaining}`
    }
  }
  
  const handleSubmit = (songId) => {
    axios({
      url: `http://localhost:3000/playlists/2/songs/${songId}`,
      method: "DELETE",
    })
      .then(() => window.location.reload(false))
      .catch(console.error);
  };
  return (
    <div className="FaveSong">
      <h2>Favorites</h2>
      {playlist.map((song) => {
        if (song.isFave) {
          return (
            <Card body>
              <div className="oneSong">
                <h3 className="unit">{song.title}</h3>
                <p className="unit">{song.artist}</p>
                <p className="unit">{convertSeconds(song.time)}</p>
                <UnfaveButton className="unit" id={song.id} />
                <FontAwesomeIcon
                className="unit"
                onClick={() => handleSubmit(song.id)}
                icon={faTimesCircle}
              />
              </div>
            </Card>
          );
        }
      })}
    </div>
  );
};

export default FaveSong;
