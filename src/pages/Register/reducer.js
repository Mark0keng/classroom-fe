import { produce } from 'immer';
import { SET_STEP, SET_DATA } from './constants';

export const initialState = {
  step: 1,
  data: {},
};

export const storedKey = ['step', 'data'];

const registerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_STEP:
        draft.step = action.step;
        break;
      case SET_DATA:
        draft.data = action.data;
        break;
    }
  });

export default registerReducer;
