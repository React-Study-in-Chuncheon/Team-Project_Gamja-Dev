import { TEST_TYPE } from "./type";

const initialState = {
   // state 초기값을 여기에 적어줍니다.
   test: "Hello Redux",
};

// state의 초기값을 정해주고 싶다면,
// (state = initialState)형식으로 적어줍니다.
export default (state = initialState, action) => {
   switch (action.type) {
      case TEST_TYPE:
         return {
            ...state,
            test: action.payload,
         };
      default:
         return state;
   }
};
