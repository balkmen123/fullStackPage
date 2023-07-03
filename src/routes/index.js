// import Home from '~/pages/Home';
import Home from '../pages/Home/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import LangdingPage from '../pages/LangdingPage/LangdingPage';
// import HeaderOnly from '~/components/Layout/HeaderOnly';
import HeaderOnly from '../components/Layout/HeaderOnly';
import HomeContainer from '../pages/Home/Home.container';
import LandingPage from '../components/Layout/LandingPage/LandingPage';
import StudyRoute from '../pages/StudyRoute/StudyRoute';
import CourseContainer from '../pages/Course/CourseContainer';
import BlogContainer from '../pages/Blog/BlogContainer';
import CoursesDetail from '../components/CoursesDetail/CoursesDetail';

// Public routes
const publicRoutes = [
  { path: '/', component: HomeContainer },
  { path: '/StudyRoute', component: StudyRoute },
  { path: '/Course', component: CourseContainer },
  { path: '/Course/:course', component: CoursesDetail },
  { path: '/Profile', component: Profile },
  { path: '/blog', component: BlogContainer },
  { path: '/blog/:topic', component: BlogContainer },
  { path: '/langding/page', component: LangdingPage, layout: LandingPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
