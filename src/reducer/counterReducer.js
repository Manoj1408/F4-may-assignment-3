import {SET_USER} from '../actions/actionType'

const initialState = {
  user: null,
}; 

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default counterReducer;