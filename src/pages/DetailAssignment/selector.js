import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDetailAssignment = (state) => state.detailAssignment || initialState;

export const selectAssignment = createSelector(selectDetailAssignment, (state) => state.assignment);
export const selectFileSubmit = createSelector(selectDetailAssignment, (state) => state.fileSubmit);
