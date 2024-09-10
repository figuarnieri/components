import styled, { keyframes, css } from 'styled-components';

interface IStyleItem {
  active: boolean;
}

const animateActive = (theme: any) => keyframes`
  0% { color: ${theme.gray.normal}; transform: scale(1); }
  60% { transform: scale(1.3); }
  100% { color: ${theme.primary.normal}; transform: scale(1); }
`;

const animateInactive = (theme: any) => keyframes`
  0% { color: ${theme.primary.normal}; }
  100% { color: ${theme.gray.normal}; }
`;

export const StyleWrapper = styled.div`
  display: flex;
`;

export const StyleItem = styled.div<IStyleItem>`
  width: 40px;
  text-align: center;
  font-size: 1.4rem;
  margin-right: 8px;
  border-bottom: 2px solid;
  border-bottom-color: ${({ active, theme }) =>
    active ? theme.primary.normal : theme.gray.normal};
  animation: ${({ active, theme }) =>
    active
      ? css`
          ${animateActive(theme)} 0.3s forwards
        `
      : css`
          ${animateInactive(theme)} 0.3s forwards
        `};
`;
