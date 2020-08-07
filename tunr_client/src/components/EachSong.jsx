import React, { useEffect, useState } from "react";
import axios from "axios";
import FaveButton from "./FaveButton";
import "./eachSong.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const EachSong = ({ playlist }) => {
  const convertSeconds = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    let remaining = seconds - minutes * 60;
    if (remaining > 9) {
      return `${minutes}:${remaining}`;
    } else {
      return `${minutes}:0${remaining}`;
    }
  };
  const handleSubmit = (songId) => {
    axios({
      url: `http://localhost:3000/playlists/2/songs/${songId}`,
      method: "DELETE",
    })
      .then(() => window.location.reload(false))
      .catch(console.error);
  };

  return (
    <div className="EachSong">
      {playlist.map((song) => {
        return (
          <Card body>
            <div className="oneSong">
              <h3 className="unit">{song.title}</h3>
              <p className="unit">{song.artist}</p>
              <p className="unit">{convertSeconds(song.time)}</p>
              <FaveButton
                className="unit"
                id={song.id}
                title={song.title}
                artist={song.artist}
                time={song.time}
              />
              <FontAwesomeIcon
                className="unit"
                onClick={() => handleSubmit(song.id)}
                icon={faTimesCircle}
              />
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default EachSong;
