import { combineReducers } from "redux";

import personReducer from './persons';
const rootReducer = combineReducers({ personReducer });
export default rootReducer;