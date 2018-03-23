import axios from "axios";

export const allPokemons = () => {
  return axios.get('http://localhost:8282/pokemons?_limit=10')
    .then(res => res.data)
    .catch(errors=> {
      alert('Error', errors)
    })
}
