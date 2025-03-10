import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h2>Connecting People Across Faiths & Interests</h2>
      <p>Find and join meaningful events within your community.</p>
      <button className = "btn btn-warning"onClick={() => navigate("/events")}>Explore Events</button>
    </section>
  );
}

export default Hero;

