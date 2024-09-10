import styled, { keyframes, css, createGlobalStyle } from 'styled-components';
import Icon from '@/components/icon';
import Button from '@/components/button';

const padding = {
  x: 10,
  y: 10,
};

interface IWrapper {
  isWidthPlaceholder?: number;
  isWidthBefore?: number;
  isDisabled?: boolean;
  isHeight?: number;
  isSafari?: boolean;
  isBefore?: boolean;
  isError?: boolean;
  isFocus?: boolean;
  isAfter?: boolean;
  isWidth: number;
  isOpen?: boolean;
  isType?: string;
}

const animatePlaceholderIn = () => keyframes`
  0% {transform: translateY(0px);}
  40% {transform: translateY(4px);}
  100% {transform: translateY(-${padding.y * 2}px);}
`;

const animatePlaceholderOut = () => keyframes`
  0% {transform: translateY(-${padding.y * 2}px);}
  40% {transform: translateY(4px);}
  100% {transform: translateY(0px);}
`;

const backgroundInput = ({
  theme,
  isDisabled,
  isSafari,
}: {
  theme: any;
  isDisabled?: boolean;
  isSafari?: boolean;
}): string => {
  if (isSafari) {
    return theme.cancel.light;
  }
  if (isDisabled) {
    return `${theme.gray.medium}33`;
  }
  return 'transparent';
};

const colorInput = ({
  isFocus,
  isError,
  isDisabled,
  theme,
}: {
  isFocus?: boolean;
  isError?: boolean;
  isDisabled?: boolean;
  theme: any;
}): string => {
  if (isError) {
    return theme.error.medium;
  }
  if (isDisabled) {
    return theme.gray.medium;
  }
  return isFocus ? theme.primary.normal : theme.gray.medium;
};

const Border = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  transition: stroke-dashoffset 0.6s, stroke 0.4s;
  rect {
    stroke-width: 2px;
    fill: transparent;
  }
`;

export const StyleField = styled.div`
  position: relative;
  font-size: 1.3rem;
  font-weight: 600;
  align-items: center;
  border-radius: 4px;
`;

export const StyleDescription = styled.div`
  font-size: 1.1rem;
  font-weight: normal;
  padding: 2px 2px 8px;
  line-height: 1.3em;
  min-height: 24px;
`;

export const StyleBorder = styled(Border)``;

export const StyleBorderOpen = styled(Border)``;

export const StylePlaceholder = styled.div`
  position: absolute;
  pointer-events: none;
  left: 2px;
  font-size: inherit;
  transition: transform 0.3s, color 0.3s;
  color: ${({ theme }) => theme.gray.medium};
`;

export const StyleInput = styled.input`
  position: relative;
  width: 100%;
  background-color: transparent;
  border-style: none;
  outline-style: none;
  font-size: inherit;
  border-radius: 6px;
  padding: ${padding.x}px ${padding.y}px;
  align-self: stretch;
`;

export const StyleInputFake = styled.label`
  align-items: center;
  padding: ${padding.y}px ${padding.x}px;
  flex-wrap: wrap;
  width: 220px;
`;

export const StyleFile = styled.span`
  display: flex;
  background-color: ${({ theme }) => theme.gray.normal};
  align-items: center;
  padding: 0 4px;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 4px;
  white-space: nowrap;
`;

export const StyleFileName = styled.span`
  width: 126px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
`;

export const StyleFileKb = styled.span`
  font-size: 0.9rem;
  background-color: ${({ theme }) => theme.gray.light};
  margin-left: 8px;
  padding: 1px 6px 0;
  border-radius: 8px;
`;

export const StyleFileEmpty = styled.span`
  color: ${({ theme }) => theme.gray.medium};
  white-space: nowrap;
  font-weight: 400;
`;

export const StyleAfterIcon = styled(Icon)`
  width: 32px;
  height: 32px;
  stroke: ${({ theme }) => theme.gray.medium};
  cursor: pointer;
`;

export const StyleAfter = styled.div`
  display: flex;
`;

export const StyleNumberButtons = styled.div`
  display: flex;
  flex-direction: column;
  > button {
    height: 16px;
    background-color: transparent;
    border-radius: 2px;
    &:hover {
      background-color: ${({ theme }) => theme.gray.normal};
    }
  }
  svg {
    width: 16px;
    height: 16px;
    stroke: ${({ theme }) => theme.gray.dark};
  }
`;

export const StyleBeforeButton = styled(Button)`
  width: 170px;
  white-space: nowrap;
  stroke: ${({ theme }) => theme.gray.light};
  svg {
    width: 24px;
  }
`;

export const StyleBefore = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 6px 0;
`;

export const StyleWrapper = styled.div<IWrapper>`
  margin-top: 8px;
  ${StyleField} {
    border: ${({ isSafari, isFocus, isError, theme }) =>
      isSafari && `2px solid ${colorInput({ isFocus, isError, theme })}`};
    border-radius: ${({ isSafari }) => isSafari && '6px'};
    background-color: ${({ theme, isDisabled, isSafari }) =>
      backgroundInput({ theme, isDisabled, isSafari })};
    display: ${({ isType }) =>  isType === 'file' ? 'inline-flex' : 'flex'};
  }
  ${StylePlaceholder} {
    left: ${padding.x}px;
    top: ${padding.y}px;
    color: ${({ isFocus, isError, isDisabled, theme }) =>
      colorInput({ isFocus, isError, isDisabled, theme })};
    animation: ${({ isOpen }) =>
      isOpen
        ? css`
            ${animatePlaceholderIn()} 0.6s forwards
          `
        : css`
            ${animatePlaceholderOut()} 0.6s forwards
          `};
    background-color: ${({ isSafari }) => isSafari && '#ecedf2'};
    padding: ${({ isSafari }) => isSafari && '0 8px'};
    z-index: ${({ isSafari }) => isSafari && 1};
  }
  ${Border} {
    width: ${({ isWidth }) => `${isWidth}px`};
    height: ${({ isHeight }) => `${isHeight}px`};
    display: ${({ isSafari }) => isSafari && 'none'};
    rect {
      width: ${({ isWidth = 0 }) => `${isWidth - 2}px`};
      height: ${({ isHeight = 0 }) => `${isHeight - 2}px`};
    }
  }
  ${StyleBorder} {
    stroke-dasharray: ${({ isHeight = 0, isWidth = 0 }) => `${isWidth * 2 + isHeight * 2 - 16}px`};
    stroke-dashoffset: ${({ isOpen, isWidthPlaceholder = 0 }) =>
      isOpen ? `-${isWidthPlaceholder + 8 + 4}px` : '0px'};
    stroke: ${({ theme }) => theme.gray.normal};
  }
  ${StyleBorderOpen} {
    stroke-dasharray: ${({ isHeight = 0, isWidth = 0 }) => `${isWidth * 2 + isHeight * 2 - 16}px`};
    stroke-dashoffset: ${({ isOpen, isHeight = 0, isWidth = 0, isWidthPlaceholder = 0 }) =>
      isOpen ? `-${isWidthPlaceholder + 8 + 4}px` : `-${isWidth * 2 + isHeight * 2 - 16}px`};
    stroke: ${({ isFocus, isError, isDisabled, theme }) =>
      colorInput({ isFocus, isError, isDisabled, theme })};
    stroke-opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  }
  ${StyleInput} {
    filter: ${({ isType }) => isType === 'file' && 'opacity(0)'};
    width: ${({ isType }) => isType === 'file' && '0'};
    position: ${({ isType }) => isType === 'file' && 'absolute'};
  }
  ${StyleInputFake} {
    display: ${({ isType }) => (isType === 'file' ? 'flex' : 'none')};
  }
  ${StyleAfter} {
    padding-right: ${({ isAfter }) => (isAfter ? '4px' : '0px')};
  }
  ${StyleBefore} {
    padding-left: ${({ isBefore }) => (isBefore ? '4px' : '0px')};
  }
  ${StyleDescription} {
    color: ${({ isError, theme }) => colorInput({ isError, theme })};
  }
  ${StyleBeforeButton} {
    font-size: 1.2rem;
    padding: 3px 12px 3px 8px;
    border-radius: 3px;
    font-size: 1.2rem;
    svg {
      width: 24px;
    }
  }
  ${StyleBefore} {
    width: ${({ isWidth, isWidthBefore = 0 }) =>
      (isWidth / 3) * 2 <= isWidthBefore ? `${(isWidth / 3) * 2}px` : 'unset'};
  }
`;

export const StyleGlobal = createGlobalStyle`
  @media print {
    ${StyleBefore} {
      height: 10px;
      overflow: hidden;
      /* display: none; */
    }
  }
`;

export default StyleWrapper;
