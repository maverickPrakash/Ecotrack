import React from 'react';
import '../styles/About.css'; 
import about from '../assets/gbAbout.mp4';

export default function About() {
  return (
    <div className="about-container">
      <video id="background-video" autoPlay loop muted >
        <source src={about} type="video/mp4" />
      </video>
     
      <div className='bg'>
      <div className="about-content">
        <h1>About EcoTrack</h1>
        <div className="about-description">
          <p>Welcome to EcoTrack, your gateway to a greener, more sustainable future. At EcoTrack, we're on a mission to make sustainable living easy and accessible for everyone. We believe that each one of us has the power to make a positive impact on the environment, and through our platform, we aim to empower individuals to reduce their carbon footprint, adopt eco-conscious habits, and connect with local green resources.</p>

          <p>Our journey began with a simple yet profound belief: that small changes in our daily lives can collectively make a significant difference in preserving our planet for future generations. With this ethos at our core, we've built EcoTrack as more than just a tool; it's a community, a resource hub, and a catalyst for change.
          </p>
          <p>Imagine a world where every action you take, from the products you buy to the way you commute, contributes to a healthier planet. That's the world we envision, and we're committed to helping you turn that vision into reality.
          </p>
          <p>On EcoTrack, you'll find a user-friendly platform packed with valuable insights, engaging challenges, and the latest environmental news to inspire and guide your journey towards sustainability. Whether you're calculating your carbon footprint, exploring local eco-friendly businesses, or participating in green lifestyle challenges, our platform is designed to support and encourage your eco-conscious efforts every step of the way.
          </p>
          <p>But EcoTrack is more than just a tool for individual action; it's a movement—a collective endeavor to create positive change on a global scale. By joining our community, you're not just adopting a greener lifestyle; you're becoming part of a larger movement dedicated to protecting our planet and building a more sustainable future for all.
          </p>
          <p>Together, we can make a difference. Join us on this journey towards a greener, more sustainable future. Together, let's build a world where sustainability is not just a choice but a way of life—a world where every action, no matter how small, contributes to a brighter tomorrow. Welcome to EcoTrack. Together, let's change the world, one eco-conscious choice at a time.
          </p>
        </div>
      </div>
      </div>
     
    </div>
  );
}
