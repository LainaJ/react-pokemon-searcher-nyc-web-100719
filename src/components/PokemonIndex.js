import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    allPokemon: [], 
    searchTerm: ""
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemonData => this.setState({
      allPokemon: pokemonData
    })
    )
  }

  filterResults = (searchParameters) => {
    this.setState({
      searchTerm: searchParameters
    })
  }

  addNewPokemon = (newPokemon) => {
    this.setState({ 
      allPokemon: [...this.state.allPokemon, newPokemon]
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon} />
        <br />
        <Search filterResults={this.filterResults} />
        <br />
        <PokemonCollection allPokemon={this.state.allPokemon} searchTerm={this.state.searchTerm}/>
      </Container>
    )
  }
}

export default PokemonPage
