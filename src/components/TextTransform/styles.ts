import styled from 'styled-components';

export const Container = styled.div`
  max-width: 47rem;
  margin: 0 auto;
  width: 100%;
`;

export const TransformButton = styled.button`
  display: block;
  margin: 4rem auto;

  background: ${(props) => props.theme['blue-300']};
  border-radius: 3px;

  padding: 12px 30px;
  border: 0;

  color: ${(props) => props.theme['white']};
  font-weight: bold;

  transition: background-color 0.3s;

  &:hover {
    background: ${(props) => props.theme['blue-500']};
  }
`;
