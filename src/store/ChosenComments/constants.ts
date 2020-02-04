import { SingleComment } from "../AllComments/constants";

export enum ChosenCommentsActionType {
  AddToChosen = 'ADD_TO_CHOSEN',
  RemoveFromChosen = 'REMOVE_FROM_CHOSEN',
}

export type ChosenCommentsAction = {
  type: ChosenCommentsActionType.AddToChosen;
  comment: SingleComment;
} | {
  type: ChosenCommentsActionType.RemoveFromChosen;
  commentId: number;
};

export type ChosenCommentsState = SingleComment[];

export const CommentsInitialState: ChosenCommentsState = [];