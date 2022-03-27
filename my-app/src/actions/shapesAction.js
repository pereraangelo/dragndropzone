import * as types from "../common/shapesTypes";
import axios from "axios";

/**-----------sendShapes action with api request-----------**/

export const sendShapes = (data) => (dispatch) => {
  dispatch({ message: true, type: types.LOADING });
  let items = [];
  data.forEach((element) => {
    items.push({ value: element.id });
  });
  let sendingData = { items };
  axios
    .post(`https://localhost/api/save_shapes/`, sendingData)
    .then((res) => {
      dispatch({ message: res.data.message, type: types.ALERT });
      dispatch({ message: false, type: types.LOADING });
    })
    .catch((err) => {
      dispatch({ message: err.message, type: types.ALERT });
      dispatch({ message: false, type: types.LOADING });
    });
};

/**-----------store drag n drop shapes to send later-----------**/

export const storeShapes = (data) => (dispatch) => {
  dispatch({ payload: data, type: types.STORE });
};

export const reset = () => (dispatch) => {
  // dispatch({ type: types.RESET });
};

export const resetStates = () => (dispatch) => {
  dispatch({ type: types.RESETSTATES });
};
