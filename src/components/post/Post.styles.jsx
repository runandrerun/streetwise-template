import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
`;

export const ContentWrap = styled.div``;

export const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.1;
`;

export const Body = styled.p`
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.1;
`;
