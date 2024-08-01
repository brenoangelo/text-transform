import styled from 'styled-components';

export const Container = styled.div`
  .ExampleAdSlot {
    margin-top: 16px;
    height: 250px;
    width: 970px;
    display: block;
    border: solid; //Remove in Production
  }

  @media (min-width: 1280px) {
    .ExampleAdSlot {
      display: none !important;
    }
  }

  @media (max-width: 1000px) {
    .ExampleAdSlot {
      width: 728px;
      height: 90px;
    }
  }

  @media (max-width: 750px) {
    .ExampleAdSlot {
      width: 336px;
      height: 280px;
    }
  }
`;
