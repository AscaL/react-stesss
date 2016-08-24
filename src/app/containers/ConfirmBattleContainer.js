import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import { helpers } from '../utils/githubHelpers';

class ConfirmBattleContainer extends React.Component {
  constructor () {
    super();
    console.log('this1:', this.context);
    this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
    this.state = {
      isLoading: true,
      playersInfo: [],
    }
  }

  componentWillMount () {
    console.log('this2:', this.context);
    console.log('com will mount');
  }

  componentDidMount () {
    console.log('this3:', this.context);
    let query = this.props.location.query
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

  handleInitiateBattle() {
    console.log('this4:', this.context);
    console.log('this handle initiate battle:', this);
    this.context.router.push({
      pathname: '/results',
      state: {
        //this pushes playersInfo to /results
        playersInfo: this.state.playersInfo
      }
    })
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle}
        />
    )
  }
}

ConfirmBattle.contextTypes = {
  router: React.PropTypes.object.isRequired,
};


module.exports = ConfirmBattleContainer;
