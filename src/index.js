import React from 'react';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import PokemonBox from './containers/PokemonBox';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore'
import routes from './routes';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  color: '#FFFFFF'
};

const store = configureStore()

const App = () => (
  routes
);

render(
  <Provider store={store}>
    <App style={styles}/>
  </Provider>,
  document.getElementById('root')
);
