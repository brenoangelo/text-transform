import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  > textarea {
    width: 100%;
    height: 9.37rem;

    background-color: ${(props) => props.theme['gray-500']};
    resize: none;
    border: 1px solid ${(props) => props.theme['gray-700']};
    border-radius: 8px;

    color: ${(props) => props.theme['gray-100']};
    padding: 1rem 3rem 1rem 1rem;

    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme['gray-500']} transparent;

    &::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-track-piece {
      background-color: transparent;
    }

    /* scrollbar indicator color */
    &::-webkit-scrollbar-thumb:vertical,
    &::-webkit-scrollbar-thumb:horizontal {
      background-color: ${(props) => props.theme['gray-300']};
      border-radius: 5px;
    }

    /* scrollbar indicator color on hover */
    &::-webkit-scrollbar-thumb:vertical:hover{
      background-color: ${(props) => props.theme['blue-300']};
    }
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 2.5rem;
  margin-top: -2.5rem;

  font-size: 0.75rem;
`;

export const Option = styled.label`
  cursor: pointer;

  display: flex;
  gap: 0.31rem;

  &:last-of-type {
    margin-left: auto;
  }
`;

export const CopyButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: 0;

  position: absolute;
  right: 1rem;
  top: 1rem;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;
