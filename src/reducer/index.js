// 각 reducers 합치기 위함
import { combineReducers } from "redux";

import test from "./testReducer";

export default combineReducers({
   // 여기에 Reducer를 추가해주면 됩니다.
   test,
});
