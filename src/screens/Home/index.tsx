import React, { useContext } from 'react';
import { OnboardingContext } from 'context/onboarding';
import { Link } from 'react-router-dom';

import * as S from './styles';

function Home() {
  const { updateStyles } = useContext(OnboardingContext);

  const handleLoadStyle = (style: string) => {
    updateStyles(style);
  };

  return (
    <S.Container>
      <S.Header size="l">
        Choose onboarding flow with different styles.
      </S.Header>
      <S.Paragraph>
        Both content are equal and use the same components, the only difference
        is the personalized style applied on each option.
      </S.Paragraph>
      <S.Paragraph>
        Note that onboarding content and styles were mocked, but we can make it
        dynamic easily by retrieving data from an API.
      </S.Paragraph>
      <S.LinksContainer>
        <S.LinkItem to="step/1" onClick={(e) => handleLoadStyle('normal')}>
          Normal Style
        </S.LinkItem>{' '}
        <S.LinkItem
          styled
          to="step/1"
          onClick={(e) => handleLoadStyle('styled')}
        >
          Custom Style
        </S.LinkItem>
      </S.LinksContainer>
    </S.Container>
  );
}

export default Home;
