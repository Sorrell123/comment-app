import * as C from './constants';

const commentsReducer = (state: C.CommentsState = C.CommentsInitialState, action: C.CommentsAction): C.CommentsState => {
  switch (action.type) {
    case C.CommentsActionType.GetCommentsSuccess:
      return action.comments.reverse();
    case C.CommentsActionType.CreateComment: {
      const { formValues } = action;
      const convertToComment: C.SingleComment = {
        postId: state[0].postId,
        id: state[0].id + 1,
        name: formValues.username,
        email: formValues.email,
        body: formValues.textarea,
      };

      return [convertToComment, ...state];
    }
    case C.CommentsActionType.GetComments:
    default:
      return state;
  }
};

export default commentsReducer;