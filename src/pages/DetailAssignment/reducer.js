import { produce } from 'immer';
import { SET_DETAIL_ASSIGNMENT, SET_FILE_SUBMIT } from './constants';

export const initialState = {
  assignment: {},
  fileSubmit: null,
};

export const storedKey = ['assignment', 'fileSubmit'];

const detailAssignmentReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_DETAIL_ASSIGNMENT:
        draft.assignment = action.assignment;
        break;
      case SET_FILE_SUBMIT:
        draft.fileSubmit = action.fileSubmit;
        break;
    }
  });

export default detailAssignmentReducer;
