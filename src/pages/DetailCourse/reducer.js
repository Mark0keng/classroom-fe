import { produce } from 'immer';
import { SET_COURSE, SET_COURSE_ASSIGNMENT } from './constants';

export const initialState = {
  assignments: [],
  course: {},
};

export const storedKey = ['assignments'];

const detailCourseReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_COURSE_ASSIGNMENT:
        draft.assignments = action.assignments;
        break;
      case SET_COURSE:
        draft.course = action.course;
        break;
    }
  });

export default detailCourseReducer;
