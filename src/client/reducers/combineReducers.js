import { combineReducers } from 'redux';
import userReducer from './userReducer';
import leftContainerReducer from './leftContainerReducer';

const reducers = combineReducers({
  userReducer,
  leftContainerReducer,
});

export default reducers;
