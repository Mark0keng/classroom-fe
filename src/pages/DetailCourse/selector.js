import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDetailCourseState = (state) => state.detailCourse || initialState;

export const selectAssignment = createSelector(selectDetailCourseState, (state) => state.assignments);
