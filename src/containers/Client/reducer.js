import { produce } from 'immer';

import { SET_LOGIN, SET_PROFILE, SET_TOKEN } from '@containers/Client/constants';

export const initialState = {
  login: false,
  token: null,
  profile: null,
};

export const storedKey = ['token', 'login', 'profile'];

const clientReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOGIN:
        draft.login = action.login;
        break;
      case SET_TOKEN:
        draft.token = action.token;
        break;
      case SET_PROFILE:
        draft.profile = action.profile;
        break;
    }
  });

export default clientReducer;
