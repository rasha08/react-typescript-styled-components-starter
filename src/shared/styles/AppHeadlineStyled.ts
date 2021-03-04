import styled from 'styled-components';

export const AppHeadlineStyled = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.family.primary};
`;
