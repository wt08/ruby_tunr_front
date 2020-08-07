import React from "react";
import axios from "axios";

const FaveButton = ({ id }) => {
  const handleClick = () => {
    axios({
      url: `http://localhost:3000/playlists/2/songs/${id}`,
      method: "PUT",
      data: { isFave: true },
    })
      .then(() => window.location.reload(false))
      .catch(console.error);
  };

  return (
    <div>
      <button onClick={handleClick}>Fave</button>
    </div>
  );
};

export default FaveButton;
