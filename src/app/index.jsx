'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

let HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
