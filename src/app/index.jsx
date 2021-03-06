'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';

const USER_DATA = {
  name: 'Emanuele Orfanelli',
  username: 'AscaL',
  image: 'https://avatars3.githubusercontent.com/u/8880943?v=3&u=9ddb1925dc47817cd05101412f92fb9cfc3ddcf2&s=140',
};

class ProfilePic extends React.Component {
  render() {
    return (
      <img src={this.props.imageUrl} style={ { height: 100, width: 100 } } />
    );
  }
}

class Link extends React.Component {
  constructor() {
    super();
    this.changeURL = this.changeURL.bind(this);
  }
  changeURL() {
    window.location.replace(this.props.href);
  }
  render() {
    return (
      <span
        style={ { color: 'blue', cursor: 'pointer' } }
        onClick={ this.changeURL }
      >
        {this.props.children}
      </span>
    );
  }
}

class ProfileLink extends React.Component {
  render() {
    return (
      <div>
        <Link href={`http://www.github.com/${this.props.username}` }>
          {this.props.username}
        </Link>
      </div>
    );
  }
}

class ProfileName extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
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
    );
  }
}

ReactDOM.render(
  routes,
  document.getElementById('app')
);
