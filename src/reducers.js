import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import registerReducer, { storedKey as storedRegisterState } from '@pages/Register/reducer';
import drawerReducer, { storedKey as storedDrawerState } from '@components/Drawer/reducer';
import courseReducer, { storedKey as storedCourseState } from '@pages/Course/reducer';
import detailCourseReducer, { storedKey as storedDetailCourseState } from '@pages/DetailCourse/reducer';
import memberCourseReducer, { storedKey as storedMemberCourseState } from '@pages/MemberCourse/reducer';
import detailAssignmentReducer, { storedKey as storedDetailAssignmentState } from '@pages/DetailAssignment/reducer';
import languageReducer from '@containers/Language/reducer';

import { mapWithPersistor } from './persistence';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },
  register: { reducer: registerReducer, whitelist: storedRegisterState },
  drawer: { reducer: drawerReducer, whitelist: storedDrawerState },
  course: { reducer: courseReducer, whitelist: storedCourseState },
  detailCourse: { reducer: detailCourseReducer, whitelist: storedDetailCourseState },
  memberCourse: { reducer: memberCourseReducer, whitelist: storedMemberCourseState },
  detailAssignment: { reducer: detailAssignmentReducer, whitelist: storedDetailAssignmentState },
};

const temporaryReducers = {
  language: languageReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;
