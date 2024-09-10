import styled from 'styled-components';
import Icon from '@/components/icon';
import shadow from '@/components/utils/shadow';

interface IOptions {
  isClick: boolean;
  isMaxItems: number;
}

interface IOptionItem {
  isDisabled: boolean;
}

interface IContainer {
  isOpen: boolean;
  noDescription?: boolean;
}

interface ISelectRaw {
  value?: any;
  defaultValue?: any;
}

export const StyleChevron = styled(Icon)`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.gray.medium};
  stroke-width: 5px;
  transition: transform 0.6s;
`;

export const StyleSelectRaw = styled.select<ISelectRaw>`
  position: absolute;
  left: 0;
  top: 0;
  filter: opacity(0);
  pointer-events: none;
`;

export const StyleBeforeText = styled.span`
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyleBeforeDelete = styled(Icon)`
  stroke: ${({ theme }) => theme.primary.medium};
  width: 12px;
  height: 12px;
  margin-left: 4px;
  cursor: pointer;
`;

export const StyleBefore = styled.span`
  background-color: ${({ theme }) => theme.primary.light};
  color: ${({ theme }) => theme.primary.dark};
  padding: 2px 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.primary.medium};
    color: ${({ theme }) => theme.gray.light};
    ${StyleBeforeDelete} {
      stroke: ${({ theme }) => theme.gray.light};
    }
  }
  ${StyleBeforeDelete} {
    * {
      stroke-width: 12px;
    }
  }
`;

export const StyleOptGroup = styled.div`
  font-weight: bold;
  padding: 4px;
  font-size: 1.2rem;
  margin: 0px 1px;
  background-color: ${({ theme }) => theme.gray.normal};
  color: ${({ theme }) => theme.gray.dark};
`;

export const StyleOptionItem = styled.div<IOptionItem>`
  padding: 4px 12px 3px;
  border-radius: 2px;
  margin: 1px;
  font-size: 1.1rem;
  min-height: 24px;
  text-decoration: ${({ isDisabled }) => (isDisabled ? 'line-through' : 'none')};
  background-color: ${({ isDisabled, theme }) => (isDisabled ? theme.gray.normal : 'transparent')};
  color: ${({ theme }) => theme.gray.dark};
  filter: ${({ isDisabled }) => (isDisabled ? 'opacity(0.6)' : 'opacity(1)')};
  cursor: pointer;
  &:hover {
    background-color: ${({ isDisabled, theme }) =>
      isDisabled ? theme.gray.normal : theme.primary.light};
    color: ${({ isDisabled, theme }) => (isDisabled ? theme.gray.dark : theme.primary.dark)};
  }
`;

export const StyleOptions = styled.ul<IOptions>`
  position: absolute;
  left: 2px;
  width: calc(100% - 4px);
  top: 100%;
  z-index: 3;
  box-shadow: ${shadow.deep.normal};
  background-color: ${({ theme }) => theme.gray.light};
  pointer-events: ${({ isClick }) => (isClick ? 'all' : 'none')};
  transition: filter 0.3s;
  will-change: transition;
  overflow: auto;
  max-height: ${({ isMaxItems }) => {
    const heightItem = 24;
    return `${heightItem * isMaxItems + isMaxItems + 1}px`;
  }};
`;

export const StyleContainer = styled.div<IContainer>`
  position: relative;
  ${StyleOptions} {
    filter: ${({ isOpen }) => (isOpen ? 'opacity(1)' : 'opacity(0)')};
    top: ${({ noDescription }) => (noDescription ? '100%' : 'calc(100% - 24px)')};
  }
  ${StyleChevron} {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
  input {
    cursor: default;
  }
`;

export default StyleChevron;
