import { csrfFetch } from "./csrf";
//create action types (with constants)
const GET_USER = "users/GET_USER";
//create action creator functions
const getUser = (user) => ({
  type: GET_USER,
  user,
});
//define & export thunk
export const retrieveUserInfo = (user) => async (dispatch) => {
  const { id, username, biography } = user;
  const response = await csrfFetch("/api/users");
  const data = await response.json();
  dispatch(getUser(data.user));
  return response;
};

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
