import styled from 'styled-components';
import { colors } from '../../config';

export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  padding-left: 2px;
  font-size: 16px;
  line-height: 1;
  background-color: ${colors.white};
  pointer-events: none;
`;

export const Error = styled.p`
  margin: 0;
  padding-left: 2px;
  font-size: 14px;
  color: ${colors.red};
`;