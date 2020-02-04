import React from 'react';
import { FieldMetaState } from 'react-final-form';
import * as P from './parts';

export interface CreateFieldContentProps {
  meta: FieldMetaState<any>, 
  labelText: string,
  children: JSX.Element,
}

const CreateFieldContent: React.FC<CreateFieldContentProps> = ({
  meta,
  labelText,
  children,
}) => (
  <P.Wrapper>
    <P.Label>{labelText}</P.Label>
    {children}
    {meta.error && meta.touched && <P.Error>{meta.error}</P.Error>}
  </P.Wrapper>
);

export default CreateFieldContent;