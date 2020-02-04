import * as C from './constants';
import { SingleComment } from "../AllComments/constants";


export const addCommentToChosen = (comment: SingleComment): C.ChosenCommentsAction => ({
   type: C.ChosenCommentsActionType.AddToChosen,
   comment,
});

export const removeCommentsFromChosen = (commentId: number): C.ChosenCommentsAction => ({
  type: C.ChosenCommentsActionType.RemoveFromChosen,
  commentId,
});