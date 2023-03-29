import styled from 'styled-components';

export const SidePanelCon = styled.div`
  width: 14rem;
  background-color: ${({ theme }) => theme.colors.header};
  position: fixed;
  padding-top: 16px;
  padding-bottom: 16px;
  top: 40px;
  bottom: 0;
  overflow-y: auto;
`;

export const LinkText = styled.span`
  color: #9ca3af;
  margin-left: 0px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-weight: 300;
  display: flex;
  align-items: center;
`;

export const HeadingText = styled.div`
  display: flex;
  align-items: center;
  color: #9ca3af;
  font-weight: bold;
  margin-bottom: 0px;
  gap: 10px;
  padding: 1rem 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const SidePanelEl = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  & a {
    display: flex;
    align-items: center;
    padding: 0.6rem 1.2rem;
    color: inherit;
    transition: all 0.2s ease-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
    }

    & svg {
      margin-right: 16px;
    }
  }
`;
