import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, cssBreakPoint } from '../../config';

export const Nav = styled.nav<{ isNavOpen: boolean }>`
  position: absolute;
  left: 0;
  top: 72px;
  height: calc(100vh - 72px);
  width: 100%;
  background-color: ${colors.white};
  z-index: 11;
  transform: ${({ isNavOpen }) => isNavOpen
    ? 'translateX(0)'
    : 'translateX(-100%)'
  };
  box-shadow: 1px 4px 10px -8px rgba(0, 0, 0, 0.71);
  transition: transform .3s ease;

  @media ${cssBreakPoint.tablet} {
    width: 30vw;
  }

  @media ${cssBreakPoint.desktop} {
    width: 20vw;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  display: block;
  position: relative;
  text-decoration: none;
  padding: 6px 12px;
  color: ${colors.black};
  transition: background-color .3s ease;

  &:hover {
    background-color: ${colors.lightGrey};
  }
`;