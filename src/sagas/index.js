import { fork } from 'redux-saga/effects';
import { watchGetPokemons } from './watcher';

export default function* startForman() {
  yield fork(watchGetPokemons);
}
