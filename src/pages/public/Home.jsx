import Navbar from "../../components/layout/Navbar";
import "../../styles/Home.css";


export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>Your Smart Health & Fitness Companion</h1>
          <p>
            Track workouts, manage health goals, and connect with expert
            trainers – all in one place.
          </p>

          <div className="hero-buttons">
            <a href="/register" className="btn-primary">Get Started</a>
            <a href="/features" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose WellNest?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Personalized Plans</h3>
            <p>Fitness and diet plans tailored to your goals.</p>
          </div>

          <div className="feature-card">
            <h3>Expert Trainers</h3>
            <p>Connect with certified trainers anytime.</p>
          </div>

          <div className="feature-card">
            <h3>Progress Tracking</h3>
            <p>Monitor workouts and health insights easily.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 WellNest. All rights reserved.
      </footer>
    </>
  );
}
