import React, { useState } from "react";
import SongForm from "./SongForm";
import axios from "axios";
import { Redirect } from "react-router-dom";

const SongCreate = (props) => {
  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    time: 0,
  });

  console.log(newSong);

  const handleChange = (event) => {
    setNewSong({
      ...newSong,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: "http://localhost:3000/playlists/2/songs",
      method: "POST",
      data: newSong,
    })
      .catch(console.error);
  };

  return (
    <div>
      <SongForm
        playlist={props.playlist}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default SongCreate;
