import React from "react";
import { Link } from "react-router-dom";

const SongForm = ({ handleSubmit, handleChange, playlist }) => {

  return (
    <div>
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
          placeholdeartistr="Artist"
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

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default SongForm;
