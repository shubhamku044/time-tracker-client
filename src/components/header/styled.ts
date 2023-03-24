import styled from 'styled-components';

export const Con = styled.div`
  position: relative;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.header};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  z-index: 10;
`;
