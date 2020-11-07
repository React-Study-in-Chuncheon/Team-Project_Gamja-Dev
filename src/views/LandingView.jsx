import React from "react";
import { useSelector } from "react-redux";

const LandingView = () => {
   // state[index.js 안에 있는 combineReducer 이름][각 Reducer의 키 값]
   const reduxData = useSelector((state) => state.test.test);

   console.info(reduxData);

   return <div>{reduxData}</div>;
};

export default LandingView;
