import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TEST_TYPE } from "../reducer/type";

import { fireDataBase } from "../app/firebaseConfig";

const LandingView = () => {
   // state[index.js 안에 있는 combineReducer 이름][각 Reducer의 키 값]
   const reduxData = useSelector((state) => state.test.test);
   const dispatch = useDispatch();

   // 로컬로 redux state 값 변경하기
   const onClickButton = () => {
      dispatch({
         type: TEST_TYPE,
         payload: "OK Bye~!",
      });
   };

   // DB에서 test('key값')을 통해 값을 불러와 redux state 값 변경
   const onClickDBButton = async () => {
      await fireDataBase.on("value", (snapShot) => {
         dispatch({
            type: TEST_TYPE,
            payload: snapShot.val().test,
         });
      });
   };

   return (
      <div>
         {reduxData}
         <button onClick={onClickButton}>click me</button>
         <button onClick={onClickDBButton}>Load Data from Firebase DB</button>
      </div>
   );
};

export default LandingView;
