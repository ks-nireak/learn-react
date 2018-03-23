import React from "react";
import axios from "axios";
import _ from "lodash";
import { getPokemons } from '../actions/pokemonActions';
import Pokemon from "../components/Pokemon";
import { connect } from 'react-redux';
import { Button, Container, Grid, Segment } from 'semantic-ui-react';

class PokemonBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      reload: false,
      pokemons: []
    };
    // this.fetchData = this.fetchData.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getPokemons());
  }

  refresh() {

  }

  fetchData() {
    // axios.get('http://localhost:8282/results/')
    //   .then((res)=> {
    //     _.each(res.data, (pokemon)=> {
    //       const poke = _.values(pokemon)[0]
    //       const pokeId = poke.url.split('/').reverse()[1]
    //       const name = poke.name
    //         axios.get(`http://localhost:8282/pokemons/${pokeId}`)
    //         .then((res) => {
    //           console.log(res.data.id, res.data.name);
    //         })
    //         .catch((errors) =>{
    //           if (errors.response.status === 404) {
    //             axios({
    //               method: 'post',
    //               url: `http://localhost:8282/pokemons`,
    //               data: {
    //                 id: pokeId,
    //                 name: name
    //               }
    //             }).then((res) => {console.log(res)})
    //           }
    //         })
    //     })
    //   });
  }

  componentWillReceiveProps(nextProps) {
    const orderedPokemons = _.orderBy(nextProps.pokemons.get('data'), (pokemon)=> parseInt(pokemon.id, 10));
    this.setState({pokemons: orderedPokemons, loaded: true})
  }

  render() {
    const { pokemons } = this.state;
    return (
      <Container
        id="pokemon-boxes"
        className="container"
        style={styles.container} >
        <Button
          onClick={this.fetchData}
          style={styles.glowButton}> Click Me !!!
        </Button>
        <Grid columns={3}>
          {
            _.map(pokemons, (pokemon, index) => {
              const pokeId = _.isEmpty(pokemon.url) ? pokemon.id : pokemon.url.split('/').reverse()[1]
              return (
                <Pokemon pokemon={pokemon} orderNumber={index} key={index} pokeId={pokeId}/>
              )
            })
          }
        </Grid>
      </Container>
    );
  }
}

const styles = {
  glowButton: {
    marginTop: '30px',
    marginBottom: '30px',
    backgroundColor: '#03001e',
    boxShadow: "1px 3px 1px #8E54E9",
    color: '#FFFFFF',
    transition: 'box-shadow .5s ease'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, null)(PokemonBox);
