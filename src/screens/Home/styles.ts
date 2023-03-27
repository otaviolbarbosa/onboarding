import HeaderText from 'components/base/HeaderText';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px;
`;

export const Header = styled(HeaderText)``;

export const Paragraph = styled.p``;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

export const LinkItem = styled(Link)<{ styled?: boolean }>`
  padding: 10px 40px;
  color: var(--white);
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid var(--primary);
  border-radius: ${(props) => (props.styled ? '4px' : `30px`)};
  background-color: ${(props) => (props.styled ? '#008B8A' : `#0072ce`)};
`;
