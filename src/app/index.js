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
      Hello World!
    < /div>
    )
  }
};

ReactDOM.render( < HelloWorld / > , document.getElementById('app'));
