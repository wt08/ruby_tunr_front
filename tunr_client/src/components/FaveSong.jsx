import React from "react";

const FaveSong = ({ playlist }) => {
  return (
    <div>
        <h2>Faves</h2>
      {playlist.map((song) => {
        if (song.isFave) {
          return (
            <>
              <h3>{song.title}</h3>
              <h3>{song.name}</h3>
              <h3>{song.time}</h3>
            </>
          );
        }
      })}
    </div>
  );
};

export default FaveSong;
