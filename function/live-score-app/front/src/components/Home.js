import React from 'react';
import LiveScores from './LiveScore';
import AdminPage from './AdminPage';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Section</h1>
      <LiveScores />
      <AdminPage />
    </div>
  );
};

export default Home;
