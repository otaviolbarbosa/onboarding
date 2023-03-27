import { OnboardingContext } from 'context/onboarding';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styles';

function Header() {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(4);
  const params = useParams();
  const { steps } = useContext(OnboardingContext);

  useEffect(() => {
    setTotalSteps(steps?.length || 0);
  }, [steps]);

  useEffect(() => {
    setCurrentStep(Number(params.step) - 1);
  }, [params.step]);

  return (
    <S.Container>
      <S.StepsLabel>
        Step {currentStep + 1} of {totalSteps}
      </S.StepsLabel>
      <S.StepsContainer>
        {[...Array(totalSteps).fill(0)].map((step, index) => (
          <S.Step key={`step-${index}`} active={index <= currentStep} />
        ))}
      </S.StepsContainer>
    </S.Container>
  );
}

export default Header;
