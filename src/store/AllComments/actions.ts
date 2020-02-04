import * as C from './constants';
import { FormValues } from '../../modules/AddComment/constants';

export const getComments = (): C.CommentsAction => ({
  type: C.CommentsActionType.GetComments
});

export const createNewComment = (formValues: FormValues): C.CommentsAction => ({
  type: C.CommentsActionType.CreateComment,
  formValues,
});

export const getCommentsSucces = (comments: C.Comments): C.CommentsAction => ({
   type: C.CommentsActionType.GetCommentsSuccess,
   comments,
});