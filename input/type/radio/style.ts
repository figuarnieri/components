import styled from 'styled-components';

interface ISwitch {
  isDisabled: boolean;
}

const RenderCheckSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke-width: 2px;
  stroke-dashoffset: 0px;
  stroke-dasharray: 48px;
  stroke-linecap: round;
  fill: transparent;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  rect {
    width: 14px;
    height: 14px;
  }
`;

export const StylePlaceholder = styled.label`
  padding-left: 8px;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme.gray.medium};
  transition: color 0.3s;
`;

export const StyleCheck = styled.label`
  cursor: pointer;
  width: 16px;
  height: 16px;
  position: relative;
  z-index: 1;
`;

export const StyleCheckSvg = styled(RenderCheckSvg)`
  stroke: ${({ theme }) => theme.gray.normal};
`;

export const StyleCheckSvgBorder = styled(RenderCheckSvg)`
  stroke-dasharray: 49px;
  transition: stroke-dashoffset 0.6s, filter 0.3s;
  circle {
    fill: ${({ theme }) => theme.primary.normal};
    transform-origin: center;
    transition: transform 0.3s;
  }
`;

export const StyleInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const StyleRadio = styled.div<ISwitch>`
  display: flex;
  align-items: center;
  position: relative;
  padding: 8px 0;
  ${StyleCheckSvgBorder} {
    stroke: ${({ isDisabled, theme }) =>
      isDisabled ? theme.gray.normal : theme.primary.normal};
    stroke-dashoffset: -49px;
    filter: opacity(0);
    circle {
      transform: scale(0) translate(50%, 50%);
    }
  }
  ${StyleInput}:checked {
    ~ ${StyleCheckSvgBorder} {
      stroke-dashoffset: 0px;
      filter: opacity(1);
      circle {
        transform: scale(1) translate(50%, 50%);
      }
    }
  }
  ${StylePlaceholder} {
    color: ${({ isDisabled, theme }) => (isDisabled ? theme.gray.normal : theme.gray.medium)};
  }
`;

export default StyleRadio;
