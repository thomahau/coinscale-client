import React from 'react';
import Button from '../../Button/Button';
import './Jumbotron.css';

export default function Jumbotron(props) {
  return (
    <div className="jumbotron u-full-width text-center">
      <div className="container">
        <h1>Your stepping stone to the cryptocurrency markets</h1>
        <p>
          Coinscale is a cryptocurrency trading simulator which lets you assemble your dream
          portfolio and track its performance through time.
        </p>
        <Button primary onClick={() => props.onClick()}>
          Sign up to get started
        </Button>
      </div>
    </div>
  );
}
