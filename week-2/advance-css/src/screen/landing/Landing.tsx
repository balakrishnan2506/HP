import { url } from "inspector";
import React from "react";

function Landing() {
  return (
    <div className="landing">
      <main className="landing-content">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Landing"
          className="landing-content-image"
        />
        <div className="landing-content-header">
          <h1>Landing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <button>Get Started</button>
        </div>
      </main>
    </div>
  );
}

export default Landing;
