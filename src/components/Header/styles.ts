import styled from 'styled-components';

export const Container = styled.header`
  height: 15.625rem;
  width: 100%;
  background-color: ${(props) => props.theme['gray-700']};
  position: relative;

  > div:last-of-type {
    position: absolute;
    right: 23px;
    top: 23px;

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
