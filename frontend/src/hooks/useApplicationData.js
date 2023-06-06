import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SHOW_MODAL":
      return { ...state, showModal: action.payload };
    case "ADD_TO_FAVOURITE":
      let likedPhoto;
      if (state.favouritePhotos.includes(action.payload)) {
        likedPhoto = state.favouritePhotos.filter(
          (photo) => photo !== action.payload
        );
      } else {
        likedPhoto = [...state.favouritePhotos, action.payload];
      }
      return { ...state, favouritePhotos: likedPhoto };
    case "SET_SELECTED_PHOTO":
      return { ...state, selectedPhoto: action.payload };
    case "CLOSE_MODAL":
      return { ...state, showModal: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const initialState = {
  showModal: false,
  favouritePhotos: [],
  selectedPhoto: "",
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToFavourite = (id) => {
    dispatch({ type: "ADD_TO_FAVOURITE", payload: id });
  };

  const openModal = () => {
    dispatch({ type: "SET_SHOW_MODAL", payload: true });
  };

  const setModalPhoto = (id) => {
    dispatch({ type: "SET_SELECTED_PHOTO", payload: id });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return {
    ...state,
    openModal,
    addToFavourite,
    setModalPhoto,
    closeModal,
    dispatch
  };
};

export default useApplicationData;
