import { produce } from 'immer';
import { SET_ASSIGNMENT } from './constants';

export const initialState = {
  assignments: [],
};

export const storedKey = ['assignments'];

const detailCourseReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ASSIGNMENT:
        draft.assignments = action.assignments;
        break;
    }
  });

export default detailCourseReducer;
