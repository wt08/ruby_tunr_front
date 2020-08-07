import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
      <FontAwesomeIcon color='red' onClick={handleClick} icon={faHeart} />
    </div>
  );
};

export default UnfaveButton;
