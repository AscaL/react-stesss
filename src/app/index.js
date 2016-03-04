'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

const USER_DATA = {
  name: 'Brollo',
  username: 'AscaL',
  image: 'https://avatars3.githubusercontent.com/u/8880943?v=3&u=9ddb1925dc47817cd05101412f92fb9cfc3ddcf2&s=140'
}

class ProfilePic extends React.Component {
  render() {
    return (
      <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    )
  }
}

class ProfileLink extends React.Component {
  render() {
    return (
      <div>
        <a href={'http://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
}

class ProfileName extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
}

ReactDOM.render (
  < Avatar user={USER_DATA} />,
  document.getElementById('app')
);
