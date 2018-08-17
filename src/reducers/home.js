import { SET_TEXT } from "./../constants/home";

const initialState = {
  initial: "Hello Home router"
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case SET_TEXT:
      return { ...state, initial: action.data };
    default:
      return state;
  }
}
