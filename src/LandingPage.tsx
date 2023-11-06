import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate('/LoginPage');
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the App</h1>
      <p>This is the landing page.</p>
      <button onClick={handleNextButtonClick}>Next</button>
    </div>
  );
}

export default LandingPage;