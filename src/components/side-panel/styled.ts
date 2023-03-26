import styled from 'styled-components';

export const SidePanelCon = styled.div`
  width: 14rem;
  background-color: ${({theme}) => theme.colors.header};
  min-height: calc(100vh - 40px);
  position: fixed;
  top: 40px;
`;

export const SidePanelEl = styled.div`
  display: flex;
  flex-direction: column;

  & a {
    display: block;
    padding: 0.6rem 1.2rem;
    color: inherit;
    transition: all .2s ease-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
    }
  }
`;
