import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCourseState = (state) => state.course || initialState;

export const selectCourses = createSelector(selectCourseState, (state) => state.courses);
