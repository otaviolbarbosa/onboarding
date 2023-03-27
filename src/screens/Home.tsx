import React, { useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Choose onboarding flow with different styles.</h2>
      <p>
        Both content are equal and use the same components, but the styles were
        personalized for each options.
      </p>
      <Link to="step/1" state={{ style: 'normal' }}>
        Normal Style
      </Link>{' '}
      <Link to="step/1" state={{ style: 'styled' }}>
        Custom Style
      </Link>
    </div>
  );
}

export default Home;
