import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TEST_TYPE } from "../reducer/type";

const LandingView = () => {
   // state[index.js 안에 있는 combineReducer 이름][각 Reducer의 키 값]
   const reduxData = useSelector((state) => state.test.test);
   const dispatch = useDispatch();

   console.info(reduxData);

   const onClickButton = () => {
      dispatch({
         type: TEST_TYPE,
         payload: "OK Bye~!",
      });
   };

   return (
      <div>
         {reduxData}
         <button onClick={onClickButton}>click me</button>
      </div>
   );
};

export default LandingView;
