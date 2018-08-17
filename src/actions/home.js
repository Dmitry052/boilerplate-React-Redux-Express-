import { SET_TEXT } from "./../constants/home";

export const setText = text => dispatch => {
  dispatch({ type: SET_TEXT, data: text });
};
