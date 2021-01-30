import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  background-color: ${props => props.bgColor}
`;

export const Header = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: white;

  @media (max-width: 1000px) {
    font-size: 28px;
  }
`;
