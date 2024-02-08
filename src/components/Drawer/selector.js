import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDrawerState = (state) => state.drawer || initialState;

export const selectActive = createSelector(selectDrawerState, (state) => state.active);
