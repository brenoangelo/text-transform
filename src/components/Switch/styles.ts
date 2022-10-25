import styled from 'styled-components';

interface IContainerProps {
  activeColor?: `#${string}`;
  size: number;
}

export const Container = styled.label<IContainerProps>`
  position: relative;
  display: inline-block;
  width: ${(props) => (props.size !== 1 ? `${60 * props.size}px` : '60px')};
  height: ${(props) => (props.size !== 1 ? `${34 * props.size}px` : '34px')};

  > input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: ${(props) =>
        props.activeColor ?? props.theme['blue-300']};
    }

    &:focus + span {
      box-shadow: 0 0 1px
        ${(props) => props.activeColor ?? props.theme['blue-300']};
    }

    &:checked + span:before {
      transform: translateX(${(props) => (props.size !== 1 ? `${26 * props.size}px` : '26px')});
    }
  }
`;

export const Slider = styled.span<IContainerProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme['gray-400']};
  -webkit-transition: 0.4s;
  transition: 0.4s;

  border-radius: ${(props) => (props.size !== 1 ? `${34 * props.size}px` : '34px')};

  &:before {
    position: absolute;
    content: '';
    height: ${(props) => (props.size !== 1 ? `${26 * props.size}px` : '26px')};
    width: ${(props) => (props.size !== 1 ? `${26 * props.size}px` : '26px')};
    left: ${(props) => (props.size !== 1 ? `${4 * props.size}px` : '4px')};
    bottom: ${(props) => (props.size !== 1 ? `${4 * props.size}px` : '4px')};
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;

    border-radius: ${(props) => (props.size !== 1 ? `${34 * props.size}px` : '34px')};
  }
`;
