import styled from 'styled-components';
import { device } from '../../config';

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: ${device.tablet}px;
  margin: 16px auto;
  padding: 0 12px;
`;