import styled, {keyframes} from 'styled-components/macro';

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const Spinner = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;
