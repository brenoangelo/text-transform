import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    div {
      visibility: visible;
    }
  }
`;

export const MessageBalloon = styled.div`
  z-index: 999;
  position: absolute;
  right: 0;
  top: 120%;

  min-width: 15rem;

  background-color: ${(props) => props.theme['gray-500']};
  padding: 0.75rem;

  border: 1px solid ${props => props.theme['gray-400']};
  border-radius: 4px;
  font-size: 0.75rem;
  visibility: hidden;

  &:before {
    position: absolute;
    top: -2px;
    right: 4px;

    content: '';
    display: block;
    width: 1rem;
    height: 1rem;

    background-color: ${(props) => props.theme['gray-500']};

    transform: rotate(45deg);
  }
`;
