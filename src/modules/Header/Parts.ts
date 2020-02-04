import styled, { keyframes } from 'styled-components';
import { colors } from '../../config';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Header = styled.header<{ showOverlay: boolean }>`
  position: relative;
  background-color: ${colors.white};

  &:after {
    content: '';
    display: ${({ showOverlay }) => showOverlay ? 'block' : 'none'};
    position: absolute;
    left: 0;
    top: 72px;
    width: 100%;
    height: calc(100vh - 72px);
    z-index: 10;
    background-color: ${colors.black};
    opacity: .1;
  }
`;

export const ShadowWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 1px 12px -9px rgba(0, 0, 0, 0.71);
`;

export const Logo = styled.img`
  width: 72px;
  height: 72px;
  animation: ${rotate} 10s linear infinite;
`;

export const Burger = styled.img`
  position: absolute;
  top: 24px;
  left: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;