import React from 'react';
import { SingleComment } from '../../store/AllComments/constants';
import * as P from './parts';


interface CommentBaseProps {
  comment: SingleComment;
  number: number;
}

const CommentBase: React.FC<CommentBaseProps> = ({ comment, number, children }) => {
  return (
    <P.Comment>
      <P.Title>{`${number + 1}. ${comment.name}`}</P.Title>
      <P.Email>{comment.email}</P.Email>
      <P.Text>{`${comment.body && comment.body.slice(0, 20)}...`}</P.Text>
        {children}
    </P.Comment>
  );
};

export default CommentBase;