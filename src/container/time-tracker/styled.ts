import styled from 'styled-components';

export const Con = styled.div`
  
`;

export const ResultsCon = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column-reverse;

  & > *:not(:first-child) {
    margin-bottom: 0.6rem;
  }
`;
