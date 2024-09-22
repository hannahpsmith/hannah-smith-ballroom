import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './utils/theme';

import App from './App';
import About from './pages/About';
import Notes from './pages/Notes';
import Contact from './pages/Contact';
import Login from './pages/Login';
import WeddingAbout from './pages/Wedding/About';
import WeddingBook from './pages/Wedding/BookLesson';
import WeddingFAQ from './pages/Wedding/FAQ';
import LearnAbout from './pages/LearnToDance/About';
import LearnBook from './pages/LearnToDance/BookLesson';
import LearnFAQ from './pages/LearnToDance/FAQ';
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
      },
      {
        path: 'weddings/about',
        element: <WeddingAbout />
      },
      {
        path: 'weddings/book-lesson',
        element: <WeddingBook />
      },
      {
        path: 'weddings/faq',
        element: <WeddingFAQ />
      },
      {
        path: 'learn-to-dance/about',
        element: <LearnAbout />
      },
      {
        path: 'learn-to-dance/book-lesson',
        element: <LearnBook />
      },
      {
        path: 'learn-to-dance/faq',
        element: <LearnFAQ />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
