import React from "react";
import axios from 'axios';
import huey from 'huey';
import _ from 'lodash';
import { Grid, Card, Header, Image } from 'semantic-ui-react';

const styles = {
  card: {
    marginTop: 50,
    transition: 'box-shadow .3s ease'
  },
  widthTransition: {
    transition: 'width .5s ease'
  }
};

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: this.props.pokemon,
      hover: false,
      click: false
    };
  }

  componentDidMount() {
    // const img = `http://localhost:3000/assets/official/${this.props.pokeId}.png`;
    // const pokeId = this.props.pokeId;
    // huey(img, (error, rgb, image) => {
    //   if (rgb != undefined && this.props.pokemon.color == undefined) {
    //     let red = rgb[0]
    //     let green = rgb[1]
    //     let blue = rgb[2]
    //     const z = "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
    //     console.log(z);
    //     setTimeout(()=> {
    //       axios.patch(`http://localhost:8282/pokemons/${pokeId}`, {color: z});
    //     }, 1)
    //   }
    // })

    // console.log(this.handleHideComponent());
  }



  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  toggleDetail() {
    this.setState({click: !this.state.click});
  }

  render() {
    const { name } = this.state.pokemon;
    const { pokemon, pokeId } = this.props;

    const backgroundColor = { backgroundColor: pokemon.color };
    const cardShadow = this.state.hover && { boxShadow: `0 12px 45px ${pokemon.color}`}
    const image_url = `http://localhost:3000/assets/official/${pokeId}.png`;
    const showDetail = this.state.click ? 16 : null
    // const hasSprite = this.handleHideComponent(image_url)
    // const displayCardClass = (!(hasSprite)) ? {display: 'none'} : {}

    return (
      <Grid.Column width={showDetail}
        style={{...styles.widthTransition}}
        >
        <Card fluid style={{...cardShadow}}
          onMouseEnter={() => this.toggleHover()}
          onMouseLeave={() => this.toggleHover()}
          onClick={() => this.toggleDetail()}
          >
          <div style={{...backgroundColor}}>
            <Image id={`sprite-${pokeId}`}
              src={image_url}
              alt={`sprite-of-${name}`} />
          </div>
          <Card.Content>
            <Card.Header>
              { _.capitalize(name) }
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}
