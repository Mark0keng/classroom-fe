import { produce } from 'immer';
import { SET_LECTURER, SET_STUDENT } from './constants';

export const initialState = {
  lecturer: {},
  students: [],
};

export const storedKey = ['lecturer', 'students'];

const memberCourseReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LECTURER:
        draft.lecturer = action.lecturer;
        break;
      case SET_STUDENT:
        draft.students = action.students;
        break;
    }
  });

export default memberCourseReducer;
