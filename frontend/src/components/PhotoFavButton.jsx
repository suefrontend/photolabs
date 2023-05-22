import React, { useReducer } from "react";
import FavBadge from "./FavBadge";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  return (
    <div
      className="photo-list--fav-icon"
      onClick={() =>
        props.dispatch({ type: "FAV_PHOTO_ADDED", payload: props.photoId })
      }
    >
      <div className="photo-list--fav-icon-svg">
        <FavBadge isFavourite={props.isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
