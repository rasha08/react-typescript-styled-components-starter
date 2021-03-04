import styled from 'styled-components';

export const HeaderWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${({ theme }) => theme.elementSizes.headerHeight};
  align-items: center;
`;

export const HeaderLogoStyled = styled.h4`
  color: #fff;
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  padding: 10px;
`;

export const ThemeSwitchStyled = styled.div`
  display: grid;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid #fff;
  cursor: pointer;
  color: #fff;
  font-size: ${({ theme }) => theme.fonts.sizes.small};
`;
