import { produce } from 'immer';
import { SET_MEMBER } from './constants';

export const initialState = {
  member: null,
};

export const storedKey = ['member'];

const memberCourseReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_MEMBER:
        draft.member = action.member;
        break;
    }
  });

export default memberCourseReducer;
