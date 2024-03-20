import React, { useState } from 'react';
import '../styles/Challenges.css';

export default function Challenges() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const challenges = [
    { id: 1, title: "Challenge 1", header: 'Zero-Waste Week', description: "For one week, aim to produce no landfill waste. Use recyclable or compostable options and avoid non-recyclable packaging." },
    { id: 2, title: "Challenge 2", header: 'Plant-Based Diet Month', description: "Eat a plant-based diet for a month. Avoid animal products and focus on consuming whole foods like vegetables, fruits, and grains." },
    { id: 3, title: "Challenge 3", header: 'Transportation Transformation', description: "For 30 days, use public transportation, carpool, bike, or walk instead of driving your personal vehicle." },
    { id: 4, title: "Challenge 4", header: 'Energy Saving Sprint', description: "Over two weeks, reduce household energy use by turning off unused electronics, using energy-efficient appliances, and reducing water heating expenses." },
  ];

  const handleChallengeClick = (challenge) => {
    setSelectedChallenge(challenge);
  };

  return (
    <div className="challenges-container">
      <div>
      <div className="header">
        <div className="icon-left"></div>
        <h1>GREEN LIFESTYLE CHALLENGES</h1>
        <div className="icon-right"></div>
      </div>
      <div className="button-grid">
        {challenges.map((challenge) => (
          <button
            key={challenge.id}
            className={`challenge-button ${selectedChallenge?.id === challenge.id ? 'selected' : ''}`}
            onClick={() => handleChallengeClick(challenge)}
          >
            {challenge.title}
          </button>
        ))}
      </div>
      {selectedChallenge && (
        <div className="challenge-description">
          <h2>{selectedChallenge.header}</h2>
          <p>{selectedChallenge.description}</p>
        </div>
      )}
      </div>
    </div>
  );
}
