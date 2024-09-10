import styled from 'styled-components';

export const StylePlaceholder = styled.div`
  font-size: 1.4rem;
  padding-left: 2px;
`;

export const StyleHeader = styled.div`
  display: flex;
  color: ${({ theme }) => theme.gray.medium};
  align-items: flex-end;
  justify-content: space-between;
`;

export const StyleValue = styled.div`
  font-size: 1.3rem;
`;

export const StyleRange = styled.div`
  position: absolute;
  left: 0;
  top: 6px;
  height: 4px;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.primary.normal}dd;
  pointer-events: none;
`;

export const StyleRangeDot = styled.div`
  position: absolute;
  left: 0px;
  top: -4px;
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.gray.light};
  border: 2px solid ${({ theme }) => theme.primary.normal};
`;

export const StyleRangeFill = styled.div`
  position: absolute;
  right: 1px;
  top: 1px;
  height: 2px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.gray.light};
`;

export const StyleInputWrapper = styled.div`
  position: relative;
`;

export const StyleInput = styled.input`
  filter: opacity(0);
  width: 100%;
`;

export const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    ${StyleRange} {
      background-color: ${({ theme }) => theme.primary.normal};
    }
  }
`;

export default StyleWrapper;
