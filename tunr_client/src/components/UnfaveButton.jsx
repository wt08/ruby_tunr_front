import React from "react";
import axios from "axios";

const UnfaveButton = ({ id }) => {
  const handleClick = () => {
    axios({
      url: `http://localhost:3000/playlists/2/songs/${id}`,
      method: "PUT",
      data: { isFave: false },
    })
      .then(() => window.location.reload(false))
      .catch(console.error);
  };

  return (
    <div>
      <button onClick={handleClick}>Unfave</button>
    </div>
  );
};

export default UnfaveButton;