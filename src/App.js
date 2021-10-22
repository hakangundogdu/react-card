import React from 'react';
import Stats from './Stats';

import './index.css';
import cardImage from './images/image-header-desktop.jpg';

function App() {
  return (
    <div className="App">
      <main className="container">
        <div className="card">
          <div className="card-text">
            <h1 className="card-text-title">
              Get <span className="text-accent">insights</span> that help your
              business grow.
            </h1>
            <p className="card-text-copy text-transparent">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>
          <div className="stats-container">
            <Stats value="10K" text="Companies"></Stats>
            <Stats value="350" text="Templates"></Stats>
            <Stats value="12M+" text="Queries"></Stats>
          </div>
          <div className="card-image">
            <img
              className="img-bw"
              src={cardImage}
              alt="three colleagues at work"
            ></img>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
