import ErrorPage from './components/pages/ErrorPage';
import Welcome from './components/Welcome';
import PrivacyPolicy from './components/PrivacyPolicy';
import Disclaimer from './components/Disclaimer';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
// import Cart from './components/pages/Cart';

const navRoutesList = [
    { routeName: 'Home', path: '/home', element: <Home /> },
    { routeName: 'Shop', path: '/shop', element: <Shop /> },
    { routeName: 'About Us', path: '/about-us', element: <AboutUs /> },
    { routeName: 'Contact Us', path: '/contact-us', element: <ContactUs /> },
    // { routeName: 'Cart', path: '/cart', element: <Cart /> },
];

const routesList = [
    { routeName: 'Welcome', path: '/', element: <Welcome />, errorElement: <ErrorPage />},
    { routeName: 'Privacy Policy', path: '/privacy-policy', element: <PrivacyPolicy /> },
    { routeName: 'Disclaimer', path: '/disclaimer', element: <Disclaimer /> },
    ...navRoutesList
];

export {
    routesList,
    navRoutesList
}