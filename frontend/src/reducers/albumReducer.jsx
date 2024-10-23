import { v4 as uuidv4 } from "uuid";

const AlbumReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ALBUM":
      return [
        ...state,
        {
          title: action.album.title,
          artiste: action.album.artiste,
          id: uuidv4(),
        },
      ];

    case "REMOVE_ALBUM":
      return state.filter((album) => album.id !== action.id);

    default:
      return state;
  }
};

export { AlbumReducer };
