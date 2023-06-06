import React, { useReducer } from "react";
import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const handleClick = () => {
    props.dispatch({ type: "ADD_TO_FAVOURITE", payload: props.id });
  };

  return (
    <div className="photo-list--fav-icon" onClick={handleClick}>
      <div className="photo-list--fav-icon-svg">
        <FavIcon
          width={20}
          height={30}
          fill={props.isFavourite ? "#C80000" : "transparent"}
          displayAlert={!!props.isFavPhotoExist}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
