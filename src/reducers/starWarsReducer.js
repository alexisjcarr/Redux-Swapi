import * as actionTypes from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHARACTERS_START:
      return {
        ...state,
        fetching: true,
        error: ""
      };
    case actionTypes.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: ""
      };
    case actionTypes.FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
