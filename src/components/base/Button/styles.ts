import styled from 'styled-components';

export const Button = styled.button`
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;
