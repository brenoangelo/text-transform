import styled from 'styled-components';

export const Header = styled.header`
  height: 15.625rem;
  width: 100%;
  background-color: ${(props) => props.theme['gray-700']};
`

export const Container = styled.div`
  width: 100%;
  max-width: 47rem;
  margin: 0 auto;
  height: 100%;
  padding: 1rem;

  > div:first-child {
    position: absolute;
    right: 24px;
    top: 24px;

    > div > li {
      list-style-type: none;

      & + li {
        margin-top: 0.625rem;
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  h1 {
    font-size: 1.625rem;
    color: ${(props) => props.theme['blue-300']};

    > span {
      color: ${(props) => props.theme['purple-300']};
    }
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-100']};
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  margin-bottom: 2.5rem;
  margin-top: -2.5rem;

  font-size: 0.75rem;
`;

export const Option = styled.label`
  cursor: pointer;

  display: flex;
  gap: 0.5rem;
`