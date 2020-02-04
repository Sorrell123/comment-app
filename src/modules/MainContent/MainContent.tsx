import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ChosenComments from '../ChosenComments/ChosenComments';
import AddComment from '../AddComment/AddComment';
import Home from '../Home/Home';
import * as P from './Parts';
import { Comments } from '../../store/AllComments/constants';

interface MainContetnProps {
  allComments: Comments;
  chosenComments: Comments;
}

const MainContent: React.FC<MainContetnProps> = ({
  allComments,
  chosenComments,
}) => {
  return (
    <P.Wrapper>
      <Switch>
        <Route path="/chosen-comments">
          <ChosenComments chosenComments={chosenComments} />
        </Route>
        <Route path="/add-comment">
          <AddComment />
        </Route>
        <Route path="/">
          <Home allComments={allComments} chosenComments={chosenComments} />
        </Route>
      </Switch>
    </P.Wrapper>
  );
};

export default MainContent;