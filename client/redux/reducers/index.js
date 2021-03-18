import { combineReducers } from "redux";

import { customer } from "./customerReducer";
import { admin } from "./adminReducer";

export default combineReducers({ customer, admin });
