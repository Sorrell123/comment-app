import styled from 'styled-components';
import { colors } from '../../config';

export const Button = styled.button`
  padding: 8px 16px;
  border: 0;
  font-size: 16px;
  border-radius: 666px;
  cursor: pointer;
  background-color: ${colors.lightGrey};
  transition: background-color .3s ease;

  &:focus {
    outline: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${colors.blue};
  color: ${colors.white};

  &:hover {
    background-color: ${colors.darkBlue};
  }

  &:active {
    background-color: ${colors.darkerBlue};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${colors.grey};
  color: ${colors.white};

  &:hover {
    background-color: ${colors.darkGrey};
  }

  &:active {
    background-color: ${colors.black};
  }
`;

export const DeleteButton = styled(Button)`
  background-color: ${colors.red};
  color: ${colors.white};

  &:hover {
    background-color: ${colors.darkerRed};
  }

  &:active {
    background-color: ${colors.darkerRed};
  }
`;
