import styled from 'styled-components';

export const HomeWrapperStyled = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  min-height: calc(100vh - ${({ theme }) => theme.elementSizes.headerHeight});
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 1%;
`;
