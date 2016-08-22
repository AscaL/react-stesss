import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import { helpers } from '../utils/githubHelpers';

class ConfirmBattleContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      isLoading: true,
      playersInfo: [],
    }
  }

  componentWillMount () {
    console.log('com will mount');
  }

  componentDidMount () {
    console.log('this:', this);
    let query = this.props.location.query
    console.log('query:', query);
    helpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then((players) => {
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]],
      })
    })
//    .then(function (players) {
//      console.log('this inside:', this);
//      this.setState({
//        isLoading: false,
//        playersInfo: [players[0], players[1]]
//      })
//    }.bind(this))
  }

  componentWillUnmount () {
    console.log('com will unmount');
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        />
    )
  }
}

ConfirmBattle.contextTypes = {
  router: React.PropTypes.object.isRequired,
};


module.exports = ConfirmBattleContainer;
