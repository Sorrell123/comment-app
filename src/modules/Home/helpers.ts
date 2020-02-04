import { Comments, SingleComment } from "../../store/AllComments/constants";


export const isCommentChosen = (chosenComments: Comments, comment: SingleComment) => {
  if (chosenComments.some(chosenComment => (chosenComment.id === comment.id))) {
    return true;
  }

  return false;
}