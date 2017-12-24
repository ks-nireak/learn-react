import React from "react";
import axios from "axios";
import _ from "lodash";

import Pokemon from "./Pokemon";

export default class PokemonBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, pokemons: [] };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "https://pokeapi.co/api/v2/pokemon"
    })
      .then(response => {
        if (_.isEmpty(response.data.data)) {
          this.setState({ loaded: true });
          console.log(response.data);
          this.setState({ pokemons: response.data.results });
        }
      })
      .catch(errors => {
        this.setState({ loaded: false });
      });
  }

  shouldComponentUpdate() {
    return this.state.loaded;
  }

  render() {
    return (
      <div id="pokemon-boxes" className="container">
        {_.map(this.state.pokemons, (pokemon, index) => {
          return <Pokemon {...pokemon} key={index} />;
        })}
      </div>
    );
  }
}
