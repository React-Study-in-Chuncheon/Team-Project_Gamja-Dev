import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TEST_TYPE } from "../reducer/type";

import { fireDataBase } from "../app/firebaseConfig";

const TestView = () => {
   // state[reducer폴더 - index.js파일 안에 있는 combineReducer 이름][각 Reducer의 키 값]
   const reduxData = useSelector((state) => state.test.test);
   const dispatch = useDispatch();

   // redux state 값 변경하기(payload : value)
   const onClickButton = () => {
      dispatch({
         type: TEST_TYPE,
         payload: "OK Bye~!",
      });
   };

   // DB에서 test('key값')을 통해 값을 불러와 redux state 값 변경
   // async - await 를 통해 firebase와의 통신 비동기 처리를 합니다.
   // firebase database 코드는 firebase 문서 참고 하시면 됩니다.(https://firebase.google.com/docs/database/web/read-and-write?authuser=0)
   const onClickDBButton = async () => {
      // firebase database 에서 불러온 값을 dispatch 를 통해 state 값 전달
      // 만일, database에서 경로를 추가하여 특정 경로 값을 읽고 싶을 때는,
      // fireDatabase.child('/path/path2').on(~~~~~~) 식으로 하시면 됩니다.(자세한 사항은 firebase 문서 참고)
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

export default TestView;
