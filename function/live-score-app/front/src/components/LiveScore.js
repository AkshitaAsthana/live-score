import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LiveScores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        // Make the API request to fetch live scores
        const response = await axios.get('http://localhost:3000/api/live-scores');

        // Set the fetched scores in the state
        setScores(response.data);
      } catch (error) {
        console.error('Error fetching live scores:', error);
      }
    };

    // Call the fetchScores function when the component mounts
    fetchScores();
  }, []);

  return (
    <div>
      <h2>Live Scores</h2>
      {scores.length > 0 ? (
        <ul>
          {scores.map((score) => (
            <li key={score.id}>
              {score.team1} vs {score.team2}: {score.score}
            </li>
          ))}
        </ul>
      ) : (
        <p>No live scores available</p>
      )}
    </div>
  );
};

export default LiveScores;
