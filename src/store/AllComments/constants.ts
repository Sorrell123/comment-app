import { FormValues } from "../../modules/AddComment/constants";

export enum CommentsActionType {
  GetComments = 'GET_COMMENTS',
  CreateComment = 'CREATE_COMMENT',
  GetCommentsSuccess = 'GET_COMMENTS_SUCCESS',
  GetCommentsFail = 'GET_COMMENTS_FAIL'
}

export interface SingleComment {
  postId: number;
  id: number;
  name?: string;
  email?: string;
  body?: string;
};

export type Comments = SingleComment[];

export type CommentsAction = {
  type: CommentsActionType.GetComments;
} | {
  type: CommentsActionType.GetCommentsSuccess;
  comments: Comments;
}| {
  type: CommentsActionType.CreateComment;
  formValues: FormValues;
};

export type CommentsState = Comments;

export const CommentsInitialState: CommentsState = [];