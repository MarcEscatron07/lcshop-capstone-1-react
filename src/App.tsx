import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  // Route
} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import './styles.css';

import ErrorPage from './components/pages/ErrorPage';
import Welcome from './components/Welcome';
import PrivacyPolicy from './components/PrivacyPolicy';
import Disclaimer from './components/Disclaimer';
import Home from './components/pages/Home';

const router = createBrowserRouter([
  { path: '/', element: <Welcome />, errorElement: <ErrorPage />},
  { path: '/privacy-policy', element: <PrivacyPolicy /> },
  { path: '/disclaimer', element: <Disclaimer /> },
  { path: '/home', element: <Home /> }
])

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>      
      <RouterProvider router={router} />
    </>
  );
}

export default App;
