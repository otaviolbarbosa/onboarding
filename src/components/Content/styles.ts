import Button from 'components/base/Button';
import HeaderText from 'components/base/HeaderText';
import Text from 'components/base/Text';
import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'content-container',
})``;

export const Title = styled(HeaderText)`
  max-width: 550px;
`;

export const Subtitle = styled(Text)`
  max-width: 550px;
`;

export const InfoList = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  align-items: end;
  margin: 55px;
`;

export const InfoListItem = styled.div``;

export const ContentContainer = styled.div`
  margin: 55px;
`;

export const InfoListItemImage = styled.img`
  margin-bottom: 25px;
`;

export const InfoListItemLabel = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

export const FooterCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FooterSpacedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonsContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

// opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
export const NextButton = styled(Button).attrs({
  className: 'button button-next',
})``;

export const BackButton = styled(Button).attrs({
  className: 'button button-back',
})``;
