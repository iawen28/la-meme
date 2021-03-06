import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import GameInput from './GameInput';

class GameDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <Well className="meme-content" bsSize="large">
          <ul id="messages"></ul>
        </Well>
        <GameInput handleMessage={this.props.handleMessage} />
      </div>
    );
  }
}

export default GameDisplay;
