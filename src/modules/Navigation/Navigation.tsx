import React from 'react';
import * as P from './Parts';
import * as C from './Constants';

const Navigation: React.FC<C.NavigationProps> = ({
  isNavOpen,
  onToggleNav,
}) => {
  return (
    <P.Nav isNavOpen={isNavOpen}>
      <P.List>
        <li>
          <P.StyledLink to="/" onClick={onToggleNav}>Strona Główna</P.StyledLink>
        </li>
        <li>
          <P.StyledLink to="/chosen-comments" onClick={onToggleNav}>Wybrane Komentarze</P.StyledLink>
        </li>
        <li>
          <P.StyledLink to="/add-comment" onClick={onToggleNav}>Dodaj Komentarz</P.StyledLink>
        </li>
      </P.List>
    </P.Nav>
  );
};

export default Navigation;