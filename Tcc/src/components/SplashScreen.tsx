import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../Css/SplashScreen.css';

const SplashScreen: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/login');
    }, 1000);

    return () => clearTimeout(timer); 
  }, [history]);

  return (
    <div className="splash-screen">
      <img
        src="https://i.ibb.co/f8k4TCF/logo.png"
        alt="Logo"
        className="logo"
      />
    </div>
  );
};

export default SplashScreen;
