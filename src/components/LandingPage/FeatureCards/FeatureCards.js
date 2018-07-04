import React from 'react';
import './FeatureCards.css';

export default function FeatureCards() {
  return (
    <div className="feature-cards">
      <div className="row card-container">
        <div className="card">
          <img className="card-img" src={require('../../../images/money-g.png')} alt="Money icon" />
          <div>
            <h3>Risk free investing with virtual cash</h3>
            <p>
              Start with $20,000 in virtual cash and put your cryptocurrency investing skills to the
              test.
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src={require('../../../images/trade-g.png')} alt="Trade icon" />
          <div>
            <h3>Go back in time and place trades</h3>
            <p>
              Enter your hypothetical buy and sell orders and see how your coins would have
              performed.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img"
            src={require('../../../images/line-chart-g.png')}
            alt="Chart icon"
          />
          <div>
            <h3>Simulate and test your portfolio ideas</h3>
            <p>Assemble your dream portfolio and track its performance through time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
