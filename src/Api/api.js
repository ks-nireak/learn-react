import axios from "axios";

export const allPokemons = () => {
  return axios.get('http://localhost:8282/pokemons')
    .then(res => res.data)
    .catch(errors=> {
      alert('Error', errors)
    })
}

export const allTypes = () => {
  return axios.get('http://localhost:8282/types')
    .then(res => res.data)
    .catch(errors=> {
      alert('Error', errors)
    })
}
