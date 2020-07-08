import React, { useEffect, Dispatch } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from './store';
import { Comments, CommentsAction } from './store/AllComments/constants';
import MainContent from './modules/MainContent/MainContent';
import { Header } from './modules/Header/Header';
import { getComments } from './store/AllComments/actions';

interface AppProps {
  allComments: Comments;
  chosenComments: Comments;
  getComments: () => void;
};

const App: React.FC<AppProps> = ({
  allComments,
  getComments,
  chosenComments,
}) => {  
  useEffect(() => {
    getComments();
  }, [getComments]); 

  return (
    <BrowserRouter>
      <Header />
      <MainContent allComments={allComments} chosenComments={chosenComments} />
    </BrowserRouter>
  );
}

const mapStateToProps = (state: ApplicationState): Omit<AppProps, 'getComments'> => ({
    allComments: state.allComments,
    chosenComments: state.chosenComments,
});

const mapDispatchToProps = (dispatch: Dispatch<CommentsAction> ): Pick<AppProps, 'getComments'> => ({
  getComments: () => dispatch(getComments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
