import React from 'react';

class PromptContainer extends React.Component {

  constructor(props) {
    super(props);
    console.log('this:', this);
    this.state = {
      username: ''
    }
  }

  onUpdateUser(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmitUser(e) {
    e.preventDefault();
    let username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      //battle
    } else {
      //go to player2
    }
  }


  render() {
    return(
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitUser}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="GitHub Username"
                onChange={this.onUpdateUser}
                value={this.state.username}
                type="text" />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
      <button
      className="btn btn-block btn-success"
      type="submit">
      Continue
      </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = PromptContainer;
