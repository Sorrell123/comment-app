import * as C from './constants';

export const chosenCommentsReducer = (state: C.ChosenCommentsState = C.CommentsInitialState, action: C.ChosenCommentsAction): C.ChosenCommentsState => {
  switch(action.type) {
    case C.ChosenCommentsActionType.AddToChosen: {
      return [
        ...state, 
        { ...action.comment }
      ];    
    }
    case C.ChosenCommentsActionType.RemoveFromChosen: {
      return state.filter((elem) => {
        return elem.id !== action.commentId;
      });
    }
    default: {
      return state;
    }
  }
}