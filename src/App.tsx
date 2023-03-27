import React from 'react';

import OnboardingProvider from './context/onboarding';
import Router from './Router';

function App() {
  return (
    <OnboardingProvider>
      <Router />
    </OnboardingProvider>
  );
}

export default App;
