import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    // userSagas(),
  ]);
}

export default rootSaga;
