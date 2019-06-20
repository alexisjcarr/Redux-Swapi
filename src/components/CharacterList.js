import React, { Component } from "react";

import Character from "./Character";

class CharacterList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.characters.map(character => {
            return <Character key={character.name} character={character.name} />;
          })}
        </ul>
      </div>
    );
  }
}

export default CharacterList;
