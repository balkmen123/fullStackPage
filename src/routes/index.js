// import Home from '~/pages/Home';
import Home from '../pages/Home/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import LangdingPage from '../pages/LangdingPage/LangdingPage';
// import HeaderOnly from '~/components/Layout/HeaderOnly';
import HeaderOnly from '../components/Layout/HeaderOnly';
import HomeContainer from '../pages/Home/Home.container';
import LandingPage from '../components/Layout/LandingPage/LandingPage';
import StudyRoute from '../pages/StudyRoute';
// Public routes
const publicRoutes = [
  { path: '/', component: HomeContainer },
  { path: '/StudyRoute', component: StudyRoute },
  { path: '/:nickname', component: Profile },
  { path: '/langding/page', component: LangdingPage, layout: LandingPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
