import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'header-container',
})``;

export const StepsLabel = styled.div.attrs({
  className: 'header-step-label',
})``;

export const StepsContainer = styled.div.attrs({
  className: 'header-steps-container',
})``;

export const Step = styled.div.attrs({
  className: 'header-step-item',
})<{ active: boolean }>`
  background-color: ${({ active }) =>
    active ? 'var(--primary) !important' : 'var(--secondary) !important'};
`;
