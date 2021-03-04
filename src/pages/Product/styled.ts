import styled from 'styled-components';
import { Link } from 'react-navi';

export const ProductsWrapperStyled = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: self-start;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  min-height: calc(100vh - ${({ theme }) => theme.elementSizes.headerHeight});
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 1%;
`;

export const ProductListItemStyled = styled(Link)`
  width: 60%;
  border: 1px solid gray;
  padding: 30px;
  color: ${({ theme }) => theme.colors.text};
`;
