import React from 'react';
import './index.css';
import cardImage from './images/image-header-desktop.jpg';

function App() {
  return (
    <div className="App">
      <main class="container">
        <section class="card">
          <div class="card-text">
            <h1 class="card-text-title">
              Get <span class="text-accent">insights</span> that help your
              business grow.
            </h1>
            <p class="card-text-copy text-transparent">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>
          <div class="card-image">
            <img
              class="img-bw"
              src={cardImage}
              alt="three colleagues at work"
            ></img>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
