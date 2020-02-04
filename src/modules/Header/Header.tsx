import React, { useState } from 'react';
import logo from '../../logo.svg'
import * as P from './Parts';
import Navigation from '../Navigation/Navigation';
import { device } from '../../config';

export const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  window.onresize = () => {
    if (window.innerWidth >= device.desktop) {
      setIsNavOpen(false)
    }
  };

  const onToggleNav = () => {
    if (isNavOpen) {
      setIsNavOpen(false)
    } else {
      setIsNavOpen(true)
    }
  };

  return (
    <P.Header showOverlay={isNavOpen}>
      <P.ShadowWrapper>
        <P.Burger
          src='https://img.icons8.com/metro/26/000000/menu.png'
          alt='burger'
          onClick={onToggleNav}
        />
        <P.Logo src={logo} alt="logo" />
      </P.ShadowWrapper>
      <Navigation isNavOpen={isNavOpen} onToggleNav={onToggleNav} />
    </P.Header>
  );
};