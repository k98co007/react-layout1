import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate('/MyPage');
  };

  return (
    <div className="login-page">
      <h1>This is the Login page place</h1>
      
        * just dummy GUI page. it's not work for login
        <br/>
        <br/>

        <input type="text" name="userName" placeholder="Email"></input>
        <input type="password" name="userPassword" placeholder="Password"></input>
 
      <button onClick={handleNextButtonClick}>Next</button>
    </div>
  );
}

export default LandingPage;