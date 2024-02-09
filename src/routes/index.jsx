import AppLayout from '@layouts/AppLayout';
import MainLayout from '@layouts/MainLayout';
import Course from '@pages/Course';
import CreateAssignment from '@pages/CreateAssignment';
import CreateCourse from '@pages/CreateCourse';
import DetailCourse from '@pages/DetailCourse';

import Home from '@pages/Home';
import JoinCourse from '@pages/JoinCourse';
import Login from '@pages/Login';
import MemberCourse from '@pages/MemberCourse';
import NotFound from '@pages/NotFound';
import Register from '@pages/Register';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/signup',
    name: 'Register',
    protected: false,
    component: Register,
    layout: MainLayout,
  },
  {
    path: '/course',
    name: 'Course',
    protected: true,
    component: Course,
    layout: AppLayout,
  },
  {
    path: '/course/:code',
    name: 'CourseDetail',
    protected: true,
    component: DetailCourse,
    layout: AppLayout,
  },
  {
    path: '/create-course',
    name: 'Create Course',
    protected: true,
    component: CreateCourse,
    layout: AppLayout,
  },
  {
    path: '/join-course',
    name: 'Join Course',
    protected: true,
    component: JoinCourse,
    layout: AppLayout,
  },
  {
    path: 'course/:code/create-assignment',
    name: 'Create Assignment',
    protected: true,
    component: CreateAssignment,
    layout: AppLayout,
  },
  {
    path: 'course/:code/member',
    name: 'Member Course',
    protected: true,
    component: MemberCourse,
    layout: AppLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
