import styled from 'styled-components';

export const Container = styled.div`
  max-width: 47rem;
  margin: 0 auto;
  width: 100%;
  padding: 0 0.5rem;
  margin-top: 1rem;
`;

export const TransformButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.625rem;
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
