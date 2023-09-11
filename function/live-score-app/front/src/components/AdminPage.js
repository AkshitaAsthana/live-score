import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = ({ handleLogout }) => {
  const [scoreData, setScoreData] = useState({
    game: '',
    score: '',
    details: '',
  });

  const { game, score, details } = scoreData;

  const handleChange = (e) => {
    setScoreData({ ...scoreData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send API request to update scores
    try {
      const response = await axios.post('http://localhost:3000/api/scores', {
        game,
        score,
        details,
      });

      console.log(response.data); // Optional: Log the response

      // Clear the form after successful submission
      setScoreData({
        game: '',
        score: '',
        details: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <button onClick={handleLogout}>Logout</button>

      <h3>Update Scores</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Game:
          <input type="text" name="game" value={game} onChange={handleChange} />
        </label>
        <label>
          Score:
          <input type="text" name="score" value={score} onChange={handleChange} />
        </label>
        <label>
          Details:
          <input type="text" name="details" value={details} onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default AdminPage;
