import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMemberCourseState = (state) => state.memberCourse || initialState;

export const selectMember = createSelector(selectMemberCourseState, (state) => state.member);
