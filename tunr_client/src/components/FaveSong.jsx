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
              <p>{song.artist}</p>
              <p>{song.time}</p>
            </>
          );
        }
      })}
    </div>
  );
};

export default FaveSong;
