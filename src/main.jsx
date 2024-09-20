import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import About from './pages/About';
import Notes from './pages/Notes';
import Contact from './pages/Contact';
import Login from './pages/Login';
// import Packages from './pages/weddings/Packages';
// import Gallery from './pages/weddings/Gallery';
// import Classes from './pages/learn-to-dance/Classes';
// import Schedule from './pages/learn-to-dance/Schedule';
import NotFound from './pages/NotFound';  // For handling 404 errors


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'notes',
        element: <Notes />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'login',
        element: <Login />
      }
      // Dropdown menu for Weddings section
      // {
      //   path: 'weddings/packages',
      //   element: <Packages />
      // },
      // {
      //   path: 'weddings/gallery',
      //   element: <Gallery />
      // },
      // Dropdown menu for Learn to Dance section
      // {
      //   path: 'learn-to-dance/classes',
      //   element: <Classes />
      // },
      // {
      //   path: 'learn-to-dance/schedule',
      //   element: <Schedule />
      // }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
