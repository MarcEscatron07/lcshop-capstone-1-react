import ErrorPage from './components/pages/ErrorPage';
import Welcome from './components/Welcome';
import PrivacyPolicy from './components/PrivacyPolicy';
import Disclaimer from './components/Disclaimer';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import AboutUs from './components/pages/AboutUs';

const routesList = [
    { path: '/', element: <Welcome />, errorElement: <ErrorPage />},
    { path: '/privacy-policy', element: <PrivacyPolicy /> },
    { path: '/disclaimer', element: <Disclaimer /> },
    { path: '/home', element: <Home /> },
    { path: '/shop', element: <Shop /> },
    { path: '/about-us', element: <AboutUs /> },
];

export {
    routesList
}