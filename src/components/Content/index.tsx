import React, { useContext, useState } from 'react';
import { OnboardingContext } from 'context/onboarding';
import { useNavigate, useParams } from 'react-router-dom';

import Input, { InputProps } from 'components/base/Input';
import DropDown, { DropDownProps } from 'components/base/DropDown';
import HeaderText, { HeaderTextProps } from 'components/base/HeaderText';
import * as S from './styles';

function Content() {
  const [isValid, setIsValid] = useState(false);
  const { currentStep: step, steps } = useContext(OnboardingContext);
  const params = useParams();
  const navigate = useNavigate();

  const resolveContent = () => {
    switch (step?.content?.type) {
      case 'infolist':
        return (
          <S.InfoList>
            {step?.content?.data?.map((item, index) => (
              <S.InfoListItem key={`explain-list-${index}`}>
                <S.InfoListItemImage src={item.iconUrl} />
                <S.InfoListItemLabel>{item.text}</S.InfoListItemLabel>
              </S.InfoListItem>
            ))}
          </S.InfoList>
        );
      case 'input':
        return (
          <Input
            {...(step.content.properties as unknown as InputProps)}
            onValidate={setIsValid}
          />
        );

      case 'dropdown':
        return (
          <DropDown
            {...(step.content.properties as unknown as DropDownProps)}
            onValidate={setIsValid}
          />
        );
      case 'message':
        return <HeaderText {...(step.content.properties as HeaderTextProps)} />;
      default:
        return <></>;
    }
  };

  const handleBack = () => {
    setIsValid(false);
    navigate(-1);
  };

  const handleNext = () => {
    const currentStepNumber = Number(params.step);

    if (!currentStepNumber || (steps && currentStepNumber >= steps?.length))
      return;

    setIsValid(false);
    navigate(`/step/${currentStepNumber + 1}`);
  };

  return (
    <S.Container>
      {/* Header */}
      {step?.title && <S.Title size="xl">{step?.title}</S.Title>}
      {step?.subtitle && <S.Subtitle>{step?.subtitle}</S.Subtitle>}
      {/* Content */}
      <S.ContentContainer>{resolveContent()}</S.ContentContainer>
      {/* Buttons Container */}
      {Number(params.step) === 1 ? (
        <S.FooterCenterContainer>
          <S.NextButton onClick={handleNext}>
            Create Your First Vehicle Set
          </S.NextButton>
        </S.FooterCenterContainer>
      ) : steps && Number(params.step) < steps.length ? (
        <S.FooterSpacedContainer>
          <S.BackButton onClick={handleBack}>Back</S.BackButton>
          <S.NextButton disabled={!isValid} onClick={handleNext}>
            Next
          </S.NextButton>
        </S.FooterSpacedContainer>
      ) : (
        <></>
      )}
    </S.Container>
  );
}

export default Content;
