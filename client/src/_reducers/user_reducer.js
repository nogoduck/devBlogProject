import { SIGNIN_USER, SIGNUP_USER, AUTH_USER } from "../_actions/types.js";

const initialState = {
  signinSuccess: {
    signinSuccess: false,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNIN_USER:
      return { ...state, signinSuccess: action.payload };
    case SIGNUP_USER:
      return { ...state, signupSuccess: action.payload };
    case AUTH_USER:
      return { ...state, userConnect: action.payload };
    default:
      return state;
  }
}
