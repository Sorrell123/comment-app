import React, { Dispatch, useState } from 'react';
import { SingleComment } from '../../store/AllComments/constants';
import * as P from './parts';
import Button from '../Button';
import { ChosenCommentsAction } from '../../store/ChosenComments/constants';
import { addCommentToChosen } from '../../store/ChosenComments/actions';
import { connect } from 'react-redux';
import CommentBase from '../CommentBase/CommentBase';


interface CommentProps {
  comment: SingleComment;
  number: number;
  isChosen: boolean;
  addToChosen: (comment: SingleComment) => void;
}

const Comment: React.FC<CommentProps> = (props) => {
  const [isChosen, setIsChosen] = useState<boolean>(props.isChosen);
  const onAddCommentToChosen = () => {
    setIsChosen(true);
    props.addToChosen(props.comment);
  }

  return (
    <CommentBase {...props}>
      <P.ButtonWrapper>
        {!isChosen ? (
          <Button renderType={'primary'} onClick={onAddCommentToChosen}>Dodaj do ulubionych</Button>
        ) : (
          <P.AddedButton renderType={'secondary'}>Dodano do ulubionych</P.AddedButton>
        )}
      </P.ButtonWrapper>
    </CommentBase>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<ChosenCommentsAction>): Pick<CommentProps, 'addToChosen'> => ({
  addToChosen: (comment: SingleComment) => dispatch(addCommentToChosen(comment)),
});

export default connect(null, mapDispatchToProps)(Comment);