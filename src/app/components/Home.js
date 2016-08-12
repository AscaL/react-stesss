import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';
import { transparentBg } from '../styles';

function Home () {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1>Github Battle</h1>
      <p className='lead'>What even is a jQuery?</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </div>
  )
}

module.exports = Home;
