import React from 'react';
import { render } from 'react-dom';
import PokemonBoxes from './PokemonBoxes';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <h2>Code Sandbox Io is awesome!!!</h2>
    <PokemonBoxes/>
  </div>
);

render(<App />, document.getElementById('root'));
