import React from 'react';

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <p> LOADING!!! </p>
    : <p> Confirm Vattle </p>
  ;
}

module.exports = ConfirmBattle
