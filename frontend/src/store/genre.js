import { csrfFetch } from "./csrf";

const GET_GENRES = "genres/GET_GENRES";

const getGenres = (genres) => ({
  type: GET_GENRES,
  genres,
});

export const retrieveGenreInfo = () => async (dispatch) => {
  const response = await csrfFetch("/api/genres");
  const data = await response.json();
  dispatch(getGenres(data.genres));
  return response;
};

const initialState = {};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRES:
      return action.genres;
    default:
      return state;
  }
};

export default genresReducer;
