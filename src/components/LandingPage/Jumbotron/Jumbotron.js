import React from 'react';
import './Jumbotron.css';

export default function Jumbotron(props) {
  return (
    <div className="jumbotron u-full-width text-center">
      <h1>Your stepping stone to the cryptocurrency markets</h1>
      <button className="button-primary button-cta" onClick={() => props.onClick()}>
        Sign up to get started
      </button>
    </div>
  );
}
