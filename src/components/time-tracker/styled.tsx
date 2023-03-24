import styled from 'styled-components';
import { ImBin } from 'react-icons/im';

export const BinIcon = styled(ImBin)`
  color: #EB455F;
  cursor: pointer;
`;

export const InputBox = styled.input`
  width: 80%;
  background-color: transparent;
  border: none;
  padding: 0.6rem;
  font-size: ${({ theme }) => theme.fonts.sm};
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.background};
  }
`;

export const TrackerCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0.6rem;
  border-radius: 2px;
  box-shadow: 0 0 0 1px black;

  &:hover ${InputBox} {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.background};
  }
`;

export const ResultCon = styled.div`
  background-color: #06283D;
  padding: 1.2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateCon = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0.6rem 1rem;
  font-size: ${({ theme }) => theme.fonts.xs};
  color: #bbb;
`;

export const ConText = styled.div`
  display: flex;
  align-items: center;
`;

export const InputCon = styled.div`
  flex: 1;
`;

export const Desc = styled.p`
  width: 16rem;
`;

export const ProjectName = styled.p`
  font-size: ${({ theme }) => theme.fonts.xs};
  position: relative;
  color: yellow;

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: yellow;
    top: 50%;
    left: -0.6rem;
    transform: translateY(-50%);
    border-radius: 50%;
  }
`;

export const TrackerBtnCon = styled.div`
  flex: 1;
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: flex-end;
`;

export const TrackerConRight = styled.div`
  display: flex;
  gap: 2rem;
`;

export const TimeSpent = styled.p`
  font-size: ${({ theme }) => theme.fonts.md};
  color: white;
`;

export const BtnTracker = styled.button`
  padding: 0.6rem 2rem;
  background-color: #62CDFF;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.header};
  font-size: ${({ theme }) => theme.fonts.xs};
  border-radius: 2px;
`;
