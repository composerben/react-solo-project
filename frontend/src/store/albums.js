import { csrfFetch } from "./csrf";
//create action type
const GET_ALBUM = "albums/GET_ALBUM";
const POST_ALBUM = "albums/POST_ALBUM";
const GET_ALL_ALBUMS = "albums/GET_ALL_ALBUMS";
//create action creator functions
const getAlbum = (album) => ({
  type: GET_ALBUM,
  album,
});
const getAllAlbums = (albums) => ({
  type: GET_ALL_ALBUMS,
  albums,
});
const postAlbum = (album) => ({
  type: POST_ALBUM,
  album,
});
//define & export thunk
export const retrieveAlbumInfo = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/albums/${id}`);
  const data = await response.json();
  dispatch(getAlbum(data.album));
  return response;
};

export const retrieveAllAlbums = () => async (dispatch) => {
  const response = await csrfFetch("/api/albums");
  const data = await response.json();
  console.log("THUNK", data);
  dispatch(getAllAlbums(data.albums));
  return response;
};

export const addAlbum = (album) => async (dispatch) => {
  const { name, albumCover, releaseDate, genreId, userId } = album;
  const response = await csrfFetch("/api/albums/add-new", {
    method: "POST",
    body: JSON.stringify({ name, albumCover, releaseDate, genreId, userId }),
  });
  const data = await response.json();
  dispatch(postAlbum(data.album));

  return response;
};

const initialState = {};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return action.album;
    case GET_ALL_ALBUMS:
      return {
        ...state,
        albums: action.albums,
      };
    case POST_ALBUM:
      return {
        ...state,
        album: action.album,
      };
    default:
      return state;
  }
};

export default albumReducer;
