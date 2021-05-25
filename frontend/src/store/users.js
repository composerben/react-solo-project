import { csrfFetch } from "./csrf";
//create action types (with constants)
const GET_USER = "users/GET_USER";
//create action creator functions
const getUser = (user) => ({
  type: GET_USER,
  user,
});
//define & export thunk
export const retrieveUserInfo = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${id}`);
  const data = await response.json();
  console.log(data);
  dispatch(getUser(data.user));
  return response;
};

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
