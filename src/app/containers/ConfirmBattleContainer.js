import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';



class ConfirmBattleContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      isLoading: true,
      playerInfo: [],
    }
  }

  componentWillMount () {
    console.log('com will mount');
  }

  componentDidMount () {
    let query = this.props.location.query
    console.log('query:', query);
    //get info from github and update state
  }

  componentWillUnmount () {
    console.log('com will unmount');
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo}
        />
    )
  }
}

ConfirmBattle.contextTypes = {
  router: React.PropTypes.object.isRequired,
};


module.exports = ConfirmBattleContainer;
