'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  displayName() {
    return "hello message"
  }
  render() {
    return (
    < div >
      Hello {this.props.name}!
    < /div>
    )
  }
};

ReactDOM.render( < HelloWorld name="yo" / > , document.getElementById('app'));
