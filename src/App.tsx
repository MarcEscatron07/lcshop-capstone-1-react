import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ErrorPage from './components/ErrorPage';
import Welcome from './components/Welcome';
import Home from './components/Home';

const router = createBrowserRouter([
  { path: '/', element: <Welcome />, errorElement: <ErrorPage />},
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
