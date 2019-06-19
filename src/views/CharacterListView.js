import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      <h2>Fetching star wars characters...</h2>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters.characters,
    fetching: state.characters.fetching,
    error: state.characters.error
  };
};

export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
