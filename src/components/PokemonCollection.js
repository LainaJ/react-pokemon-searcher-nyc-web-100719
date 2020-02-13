import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemonCards = () => {
    if (this.props.searchTerm === "") {
      return this.props.allPokemon.map(pokemon => <PokemonCard pokemon={pokemon}></PokemonCard>)
      } else if (this.props.searchTerm !== "") {
        let filteredResults = this.props.allPokemon.filter(pokemon => pokemon.name.includes(this.props.searchTerm))
         return filteredResults.map(pokemon => <PokemonCard pokemon={pokemon}></PokemonCard>)
      }
    }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
