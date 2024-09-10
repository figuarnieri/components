import styled from 'styled-components';
import responsive from '@/components/utils/responsive';
import { IGrid, IColumn } from './';

export const StyleGrid = styled.div<IGrid>`
  display: grid;
  grid-template-columns: ${({ isColumns = 12 }) => `repeat(${isColumns}, 1fr)`};
  grid-template-rows: ${({ isRows = 1 }) => `repeat(${isRows}, 1fr)`};
  gap: ${({ gap = '16px' }) => gap};
  width: 100%;
  ${responsive(
    'large',
    `
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    `
  )}
`;

export const StyleColumn = styled.div<IColumn>`
  grid-column-start: ${({ columnStart = 1 }) => columnStart};
  grid-column-end: ${({ columnEnd = 13 }) => columnEnd};
  grid-row-start: ${({ rowStart }) => rowStart};
  grid-row-end: ${({ rowEnd }) => rowEnd};
  ${responsive(
    'large',
    `
      grid-column-start: auto;
      grid-column-end: auto;
      grid-row-start: auto;
      grid-row-end: auto;
    `
  )};
`;

export default StyleGrid;
