import axios from 'axios';
import { put, takeLatest, } from 'redux-saga/effects';
import { Comments, CommentsAction, CommentsActionType } from './constants';
import { getCommentsSucces } from './actions';
import { getAllComments } from '../../api/requests';

function* getCommetnsWorker() {
   try {
      const { data }: { data: Comments } = yield axios.get(getAllComments);
      yield put(getCommentsSucces(data));
   } catch (error) {
      throw new Error('Coś poszło nie tak spróbuj odświeżyć stronę');
   }
};


export function* getCommentsWatcher() {
  yield takeLatest<CommentsAction>(CommentsActionType.GetComments, getCommetnsWorker);
};


