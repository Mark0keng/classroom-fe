import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDetailCourseState = (state) => state.detailCourse || initialState;

export const selectAssignments = createSelector(selectDetailCourseState, (state) => state.assignments);
export const selectCourse = createSelector(selectDetailCourseState, (state) => state.course);
