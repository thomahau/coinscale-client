import React from 'react';
import Button from '../../Button/Button';
import './Jumbotron.css';

export default function Jumbotron(props) {
  return (
    <div className="jumbotron u-full-width text-center">
      <h1>Your stepping stone to the cryptocurrency markets</h1>
      <Button primary onClick={() => props.onClick()}>
        Sign up to get started
      </Button>
    </div>
  );
}
