import styled from 'styled-components';
import { colors } from '../../config';
import Button from '../Button';

export const Comment = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(50% - 16px);
  padding: 12px 8px 0;
  margin: 0 0 24px;
  border-radius: 8px;

  &:hover:before {
    opacity: 1;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 8px;
    z-index: -1;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 2px 1px, rgba(0, 0, 0, 0.16) 0px 4px 8px 0px;
    transition: opacity .3s ease;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 8px;
    height: 1px;
    background-color: ${colors.lightGrey};
    width: calc(100% - 16px);
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 0 0 12px;
`;

export const Email = styled.h3`
  font-size: 14px;
  color: ${colors.grey};
  margin: 0;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 12px;
  text-align: right;
`;

export const AddedButton = styled(Button)`
  pointer-events: none;
`;
