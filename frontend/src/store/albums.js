import { csrfFetch } from "./csrf";
//create action type
const GET_ALBUM = "albums/GET_ALBUM";
//create action creator functions
const getAlbum = (album) => ({
  type: GET_ALBUM,
  album,
});
//define & export thunk
export const retrieveAlbumInfo = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/albums/${id}`);
  const data = await response.json();
  dispatch(getAlbum(data.album));
  return response;
};

const initialState = {};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return action.album;
    default:
      return state;
  }
};

export default albumReducer;
