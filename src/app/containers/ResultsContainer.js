import React from 'react';
import Results from '../components/Results';

export class ResultsContainer extends React.Component {

  constructor () {
    super();
    this.state = {
      isLoading: true,
      scores: [],
    }
  }

  componentDidMount() {
    console.log('we got there');
    console.log(this.props);
  }

  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
      />
    )
  }
}
