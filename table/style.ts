import styled from 'styled-components';
import Icon from '@/components/icon';
import { ITd, ITh, ITable, ITableTextWrap } from '@/components/table';

export const StyleTr = styled.tr`
  &:last-child {
    td {
      border-bottom-style: none;
    }
  }
  &:hover {
    td {
      background-color: ${({ theme }) => theme.gray.normal}33;
    }
  }
`;

export const StyleTd = styled.td<ITd>`
  width: ${({ width }) => width};
  text-align: ${({ align = 'left' }) => align};
  border-bottom: 1px solid ${({ theme }) => theme.gray.normal}22;
  font-size: 1.3rem;
  [class*='StyleSwitch'] {
    margin: 0;
  }
  &:first-child {
    text-align: ${({ align = 'left' }) => align};
  }
  &:last-child {
    text-align: ${({ align = 'right' }) => align};
  }
`;

export const StyleTh = styled.th<ITh>`
  text-align: ${({ align }) => align};
  &:first-child {
    text-align: ${({ align = 'left' }) => align};
  }
  &:last-child {
    text-align: ${({ align = 'right' }) => align};
  }
`;

export const StyleTable = styled.table<ITable>`
  border-spacing: 0px;
  width: ${({ width }) => width};
  th {
    background-color: ${({ theme }) => theme.primary.normal};
    color: ${({ theme }) => theme.gray.light};
    font-size: 1.2rem;
    &:first-child {
      border-top-left-radius: 8px;
    }
    &:last-child {
      border-top-right-radius: 8px;
    }
  }
  ${StyleTd},
  ${StyleTh} {
    padding: 8px 16px;
  }
`;

export const StyleIcon = styled(Icon)`
  width: 36px;
  height: 36px;
  stroke: ${({ theme }) => theme.gray.medium};
  cursor: pointer;
  &:hover {
    stroke: ${({ theme }) => theme.primary.normal};
  }
`;

export const StyleText = styled.span<ITableTextWrap>`
  font-size: 1.4rem;
  display: block;
  max-width: ${({ width }) => `${width}px`};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default StyleTable;
