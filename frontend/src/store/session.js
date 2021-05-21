import { csrfFetch } from "./csrf";

const SET_SESSION = "session/SET_SESSION";
const REMOVE_SESSION = "session/REMOVE_SESSIOn";

const initialState = {
  user: null,
};

const setUser = (user) => ({
  type: SET_SESSION,
  user,
});
const removeuser = () => ({
  type: REMOVE_SESSION,
});

export const signInUser = (user) => async (dispatch) => {
  const person = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify(user),
  });
  const loggedInUser = await person.json();
  dispatch(setUser(loggedInUser));
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSION:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default sessionReducer;
