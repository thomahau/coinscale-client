import React from 'react';

export default function Jumbotron(props) {
  return (
    <div className="jumbotron u-full-width text-center">
      <h1>Your stepping stone to the cryptocurrency markets</h1>
      <button className="button-primary" onClick={() => props.onClick()}>
        Sign up to get started
      </button>
    </div>
  );
}
