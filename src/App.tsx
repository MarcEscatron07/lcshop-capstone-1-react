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

import { routesList } from './routes';

const router = createBrowserRouter(routesList);

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
