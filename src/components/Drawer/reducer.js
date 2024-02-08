import { produce } from 'immer';
import { SET_ACTIVE } from './constants';

export const initialState = {
  active: 'dashboard',
};

export const storedKey = ['active'];

const drawerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ACTIVE:
        draft.active = action.active;
        break;
    }
  });

export default drawerReducer;
