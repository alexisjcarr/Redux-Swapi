import axios from "axios";

const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

export const getCharacters = () => dispatch => {
  dispatch({
    type: FETCH_CHARACTERS_START
  });
  axios
    .get("https://swapi.co/api/people/")
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_CHARACTERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_CHARACTERS_FAILURE,
        payload: err
      });
    });
};
