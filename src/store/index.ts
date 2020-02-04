import { combineReducers } from "redux";
import commentsReducer from "./AllComments/reducers";
import { Comments } from "./AllComments/constants";
import { chosenCommentsReducer } from "./ChosenComments/reducers";

export interface ApplicationState {
  allComments: Comments;
  chosenComments: Comments;
}


const rootReducer = combineReducers({
  allComments: commentsReducer,
  chosenComments: chosenCommentsReducer,
});

export default rootReducer;