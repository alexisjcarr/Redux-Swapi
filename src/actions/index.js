import axios from 'axios';

const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getCharacters = () => dispatch => {
    dispatch({
        type: FETCH_CHARACTERS_START,
    })
}
