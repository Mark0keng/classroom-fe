import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import loginSaga from '@pages/Login/saga';
import registerSaga from '@pages/Register/saga';
import courseSaga from '@pages/Course/saga';
import createCourseSaga from '@pages/CreateCourse/saga';
import joinCourseSaga from '@pages/JoinCourse/saga';
import createAssignmentSaga from '@pages/CreateAssignment/saga';
import memberCourseSaga from '@pages/MemberCourse/saga';
import detailCourseSaga from '@pages/DetailCourse/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    loginSaga(),
    registerSaga(),
    courseSaga(),
    createCourseSaga(),
    joinCourseSaga(),
    createAssignmentSaga(),
    memberCourseSaga(),
    detailCourseSaga(),
  ]);
}
