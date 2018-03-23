import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PokemonBox from './containers/PokemonBox';

// Map components to different routes.
// The parent compnent wraps other components and thus serves as the enterence to other React components.
// IndexRoute maps HomePage component to the default route.

export default (
  <Router path="/" >
    <Route exact path="/" component={PokemonBox}/>
  </Router>
);
