import logger from "redux-logger";
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers/';
import { createStore, applyMiddleware ,compose} from 'redux';


export const middlewares = [ReduxThunk];
const initialState = {};
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStore(
  RootReducer,
  initialState,
  // eslint-disable-next-line no-undef
  compose(
    applyMiddleware(logger, ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (noop) => noop
  )
);
