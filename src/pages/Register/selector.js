import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRegisterState = (state) => state.register || initialState;

export const selectStep = createSelector(selectRegisterState, (state) => state.step);
export const selectData = createSelector(selectRegisterState, (state) => state.data);
