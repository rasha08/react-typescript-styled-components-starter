import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderLogoStyled, HeaderWrapperStyled, ThemeSwitchStyled } from './styled';
import { StoreState } from '../../../store';
import { ThemeType } from '../../enums/ThemeType';
import { setAppTheme } from '../../../store/theme/actions';

const Header: FC = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector<StoreState, ThemeType>(s => s.theme.type);

  const changeTheme = useCallback(() => {
    dispatch(setAppTheme({ type: currentTheme === ThemeType.Light ? ThemeType.Dark : ThemeType.Light }));
  }, [currentTheme, dispatch]);

  return (
    <HeaderWrapperStyled>
      <HeaderLogoStyled>React Typescript Starter</HeaderLogoStyled>
      <ThemeSwitchStyled onClick={changeTheme}>Change Theme</ThemeSwitchStyled>
    </HeaderWrapperStyled>
  );
};

export default Header;
