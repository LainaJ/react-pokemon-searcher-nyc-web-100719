import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    isClicked: false
  }

  render() {
    return (
      <Card>
        <div onClick={() => this.setState ({
          isClicked: !this.state.isClicked
        }) 
        }>
          <div className="image">
            <img alt="oh no!" src={!this.state.isClicked? this.props.pokemon.sprites.front: this.props.pokemon.sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(s => s.name === 'hp').value || 50}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
