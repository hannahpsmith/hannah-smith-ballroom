import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import theme from './utils/theme';

import App from './App';
import About from './pages/About';
import Notes from './pages/Notes';
import Contact from './pages/Contact';
import Login from './pages/Login';
import WeddingAbout from './pages/Weddings/About';
import WeddingBook from './pages/Weddings/BookLesson';
import WeddingFAQ from './pages/Weddings/FAQ';
import LearnAbout from './pages/LearnToDance/About';
import LearnBook from './pages/LearnToDance/BookLesson';
import LearnFAQ from './pages/LearnToDance/FAQ';
import OremBook from './pages/Orem';
import SLCBook from './pages/SLC';
import Consultations from './pages/Consultation';
import NotFound from './pages/NotFound';  // For handling 404 errors

// Set up Apollo Client
const client = new ApolloClient({
  uri: '/graphql',  // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

// Define router
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
      {
        path:'book-lesson/orem',
        element: <OremBook />
      },
      {
        path: 'book-lesson/slc',
        element: <SLCBook />
      },
      {
        path: 'book-consultation',
        element: <Consultations />
      },
    ],
  },
]);

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>  {/* Wrapping with ApolloProvider */}
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </ApolloProvider>
);
