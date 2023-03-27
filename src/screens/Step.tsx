import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from 'components/Header';
import Content from 'components/Content';
import { OnboardingContext } from 'context/onboarding';

function Step() {
  const { steps, currentStep, updateCurrentStep } =
    useContext(OnboardingContext);
  const params = useParams();

  useEffect(() => {
    if (steps?.length && params.step)
      updateCurrentStep(steps[Number(params.step) - 1]);
  }, [steps, params]);

  return !currentStep ? (
    <></>
  ) : (
    <>
      <Header />
      <Content />
    </>
  );
}

export default Step;
