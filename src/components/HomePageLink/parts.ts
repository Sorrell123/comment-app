import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../config';

export const StyledLink = styled(Link)`
  display: inline-block;
  min-width: 200px;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 1.2;
  color: ${colors.white};
  border-radius: 666px;
  text-decoration: none;
  background-color: ${colors.grey};
  transition: background-color .3s ease;

  &:hover {
    background-color: ${colors.darkGrey};
  }

  &:active {
    background-color: ${colors.black};
  }
`;