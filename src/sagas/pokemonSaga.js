import { call, put } from 'redux-saga/effects';
import { allPokemons } from '../Api/api';
import * as types from '../constants/actionTypes';

export function* getPokemons() {
  try {
    const pokemons = yield call(allPokemons);
    yield put({type: types.GET_POKEMONS_SUCCESS, payload: pokemons});
  } catch (error) {
    yield put({type: types.GET_POKEMONS_ERROR, payload: error});
  }

}
