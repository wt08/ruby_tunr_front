import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import "./songForm.css";

const SongForm = ({ handleSubmit, handleChange, playlist }) => {

  return (
    <div className="SongForm">
      <form id="form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          placeholder="Title"
          value={playlist.title}
          name="title"
          onChange={handleChange}
        />
        <label>Artist</label>
        <input
          placeholder="Artist"
          value={playlist.artist}
          name="artist"
          onChange={handleChange}
        />
        <label>Time</label>
        <input
          placeholder="Time"
          value={playlist.time}
          name="time"
          onChange={handleChange}
        />

<Button variant="outline-dark">Submit</Button>

      </form>
    </div>
  );
};

export default SongForm;
