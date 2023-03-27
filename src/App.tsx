import React from 'react';
import OnboardingProvider from './context/onboarding';
import Router from './Router';

import GlobalStyle from './theme/globalStyles';

import './App.css';

function App() {
  return (
    <OnboardingProvider>
      <GlobalStyle />
      <Router />
    </OnboardingProvider>
  );
}

export default App;
