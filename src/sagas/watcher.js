import { takeLatest } from 'redux-saga/effects';
import { getPokemons } from './pokemonSaga';
import * as types from '../constants/actionTypes';

export function* watchGetPokemons() {
  yield takeLatest(types.GET_POKEMONS_REQUEST, getPokemons);
}
