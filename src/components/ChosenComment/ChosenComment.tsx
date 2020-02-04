import React, { Dispatch } from 'react';
import { SingleComment } from '../../store/AllComments/constants';
import * as P from './parts';
import Button from '../Button';
import CommentBase from '../CommentBase/CommentBase';
import { ChosenCommentsAction } from '../../store/ChosenComments/constants';
import { removeCommentsFromChosen } from '../../store/ChosenComments/actions';
import { connect } from 'react-redux';


interface ChosenCommentProps {
  comment: SingleComment;
  number: number;
  removeComment: (commentId: number) => void;
}

const ChosenComment: React.FC<ChosenCommentProps> = (props) => {
  const onRemoveComment = () => props.removeComment(props.comment.id);

  return (
    <CommentBase {...props}>
      <P.ButtonWrapper>
        <Button renderType={'delete'} onClick={onRemoveComment}>Usuń z ulubionych</Button>
      </P.ButtonWrapper>
    </CommentBase>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<ChosenCommentsAction>): Pick<ChosenCommentProps, 'removeComment'>  => ({
  removeComment: (commentId: number) => dispatch(removeCommentsFromChosen(commentId))
});

export default connect(null, mapDispatchToProps)(ChosenComment);