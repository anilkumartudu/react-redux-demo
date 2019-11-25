import * as actionTypes from "../action";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        counter: state.counter - 1
      };
  }
  return state;
};

export default reducer;
