import styled from 'styled-components';

export interface IIconStyle {
  strokeWidth?: number;
  circle?: number;
}

export interface ICircle {
  circle?: number;
}

export const StyleSvgCircle = styled.circle<ICircle>`
  stroke-width: ${({ strokeWidth }) => strokeWidth};
  stroke-opacity: ${({ circle }) => circle ? 'inherit' : 0};
`;

export const StyleSvgChild = styled.path<IIconStyle>`
  stroke-width: ${({ strokeWidth }) => strokeWidth};
`;

export const StyleSvg = styled.svg`
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  ${StyleSvgChild}, ${StyleSvgCircle} {
    fill: transparent;
  }
`;

export default StyleSvgChild;

