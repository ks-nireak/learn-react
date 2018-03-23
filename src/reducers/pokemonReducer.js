import { Record } from 'immutable';
// import initialState from './initialState';
import * as types from '../constants/actionTypes';

const initialState = new Record({
  data: null,
  selected: null
})();

// const initialState = form(pokemons);

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case types.GET_POKEMONS_SUCCESS:
      return state.set('data', payload)
    default:
      return state;
  }
}
