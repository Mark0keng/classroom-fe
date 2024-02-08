import { produce } from 'immer';
import { SET_COURSE } from './constants';

export const initialState = {
  courses: [],
};

export const storedKey = ['courses'];

const courseReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_COURSE:
        draft.courses = action.courses;
        break;
    }
  });

export default courseReducer;
