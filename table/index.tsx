import { FC, TdHTMLAttributes, ThHTMLAttributes, HTMLAttributes } from 'react';
import { IIcon } from '@/components/icon';
import { StyleTable, StyleTd, StyleTr, StyleTh, StyleIcon, StyleText } from './style';

export interface ITable {
  width?: string;
}

export interface ITd extends TdHTMLAttributes<HTMLTableCellElement> {
  width?: string;
}

export interface ITh extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
  width?: string;
}

export interface ITableTextWrap extends HTMLAttributes<HTMLSpanElement> {
  width?: number;
}

const Table: FC<ITable> = props => {
  const { children, width = '100%' } = props;
  const propsCustom = { ...props };
  delete propsCustom.children;
  delete propsCustom.width;
  return (
    <StyleTable {...propsCustom} width={width}>
      {children}
    </StyleTable>
  );
};

export const Td: FC<ITd> = ({ children, width, align }) => (
  <StyleTd width={width} align={align}>
    {children}
  </StyleTd>
);

export const Tr: FC = ({ children }) => <StyleTr>{children}</StyleTr>;

export const Th: FC<ITh> = ({ children, width, align }) => (
  <StyleTh width={width} align={align}>
    {children}
  </StyleTh>
);

export const Thead: FC = ({ children }) => <thead>{children}</thead>;

export const Tbody: FC = ({ children }) => <tbody>{children}</tbody>;

export const TableIcon = ({ name }: IIcon) => <StyleIcon name={name} />;

export const TableTextWrap: FC<ITableTextWrap> = ({ children, width = 240 }) => (
  <StyleText width={width}>{children}</StyleText>
);

export default Table;
