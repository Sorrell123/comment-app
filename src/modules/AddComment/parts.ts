import styled, { css } from 'styled-components';
import { colors } from '../../config';
import Button from '../../components/Button';

export const Title = styled.h2`
  width: 100%;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto 24px;
`;

export const FormInputSection = styled.div`
  margin-bottom: 12px;
  width: calc(50% - 16px);
`;

export const FormTextareaSection = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  height: 34px;
  width: 100%;
  padding: 0 8px;
  font-size: 14px;
  border: 1px solid ${colors.mediumGrey};
  border-radius: 6px;

  &:focus {
    border-color: ${colors.blue}; 
    outline-width: 0;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 74px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid ${colors.mediumGrey};
  border-radius: 6px;
  resize: vertical;

  &:focus {
    border-color: ${colors.blue}; 
    outline-width: 0;
  }
`;

export const SubmitButton = styled.button`
  min-width: 232px;
  margin: 16px auto 0;
  padding: 8px 16px;
  border: 0;
  border-radius: 666px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${colors.blue};
  color: ${colors.white};
  transition: background-color .3s ease;

  &:hover {
    background-color: ${colors.darkBlue};
  }

  &:active {
    background-color: ${colors.darkerBlue};
  }

  &:focus {
    outline-width: 0;
  }
`;

const alignCenter = css`
  width: 100%;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  ${alignCenter};
`;

export const HomePageLinkWrapper = styled.div`
  ${alignCenter};
`;

export const StyledButton = styled(Button)`
  margin: 0 12px;
`;