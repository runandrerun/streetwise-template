import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1000px) {
    padding: 10px;
  }
`;

export const Content = styled.div``;
