import { FC } from 'react';
import { StyleGrid, StyleColumn } from './style';

export interface IGrid {
  isColumns?: number;
  isRows?: number;
  gap?: string;
}

export interface IColumn {
  columnStart?: number;
  columnEnd?: number;
  rowStart?: number;
  rowEnd?: number;
}

export const Grid: FC<IGrid> = props => {
  const { children, isColumns, isRows, gap } = props;
  return (
    <StyleGrid isColumns={isColumns} isRows={isRows} gap={gap}>
      {children}
    </StyleGrid>
  );
};

export const Column: FC<IColumn> = props => {
  const { children, columnStart, columnEnd, rowStart, rowEnd } = props;
  return (
    <StyleColumn
      columnStart={columnStart}
      columnEnd={columnEnd}
      rowStart={rowStart}
      rowEnd={rowEnd}
    >
      {children}
    </StyleColumn>
  );
};

export default Grid;
