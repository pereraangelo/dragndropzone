import * as types from "../common/shapesTypes";

const initialState = {
  uploading: false,
  message: "",
  shapes: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ALERT:
      return {
        ...state,
        message: action.message,
      };
    case types.LOADING:
      return {
        ...state,
        uploading: action.message,
      };
    case types.STORE:
      return {
        ...state,
        shapes: action.payload,
      };
    case types.RESETSTATES:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}
