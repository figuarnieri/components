import styled from 'styled-components';
import Icon from '@/components/icon';

interface ISwitch {
  isChecked: boolean;
  isDisabled: boolean;
}

interface IBackground extends ISwitch {
  theme: any;
}

const backgroundColor = ({ isChecked, isDisabled, theme }: IBackground) => {
  if (isChecked) {
    if (isDisabled) {
      return `${theme.success.light}66`;
    }
    return theme.success.light;
  }
  if (isDisabled) {
    return `${theme.gray.normal}66`;
  }
  return theme.gray.normal;
};

export const StylePlaceholder = styled.label`
  font-size: 1.2rem;
  padding-left: 8px;
  &:empty {
    padding-left: 0;
  }
`;

export const StyleInput = styled.input`
  position: absolute;
  filter: opacity(0);
  left: 0;
  top: 0;
`;

export const StyleButtons = styled.label`
  width: 48px;
  height: 24px;
  border-radius: 16px;
  transition: background-color 0.6s;
`;

export const StyleCircle = styled.span`
  position: absolute;
  left: 2px;
  top: 2px;
  width: 20px;
  height: 20px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.gray.light};
  transition: transform 0.6s;
  will-change: transition;
`;

const RenderIcon = styled(Icon)`
  transition: transform 0.6s, filter 0.6s;
  will-change: transition, filter;
`;

export const StyleIconInactive = styled(RenderIcon)`
  stroke: ${({ theme }) => theme.gray.normal};
`;

export const StyleIconActive = styled(RenderIcon)``;

export const StyleSwitch = styled.div<ISwitch>`
  display: flex;
  align-items: center;
  position: relative;
  margin: 16px 0;
  > * {
    cursor: inherit;
  }
  ${StyleButtons} {
    background-color: ${({ isChecked, isDisabled, theme }) =>
      backgroundColor({ isChecked, isDisabled, theme })};
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  }
  ${StylePlaceholder} {
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  }
  ${StyleCircle} {
    transform: ${({ isChecked }) => (isChecked ? `translateX(24px)` : `translateX(0px)`)};
  }
  ${StyleIconActive} {
    filter: ${({ isChecked }) => (isChecked ? 'opacity(1)' : 'opacity(0)')};
    transform: ${({ isChecked }) => (isChecked ? 'rotate(0deg)' : 'rotate(-90deg)')};
    stroke: ${({ isDisabled, theme }) =>
      isDisabled ? `${theme.success.light}66` : theme.success.light};
  }
  ${StyleIconInactive} {
    filter: ${({ isChecked }) => (isChecked ? 'opacity(0)' : 'opacity(1)')};
    transform: ${({ isChecked }) => (isChecked ? 'rotate(90deg)' : 'rotate(0deg)')};
  }
  ${RenderIcon} {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export default StyleSwitch;
