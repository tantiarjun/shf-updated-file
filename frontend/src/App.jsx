import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Aboutus from './components/aboutus/Aboutus';
import Homepage from './components/homepage/Homepage';
import Gallery from './components/gallery/Gallery';
import Events from './components/events/Events';
import Donate from './components/donate/Donate';
import Login from './components/admin/Login';
import Contact from './components/contact/Contact';
import Work from './components/work-with-us/Work';
import Work2 from './components/work-with-us-2/Work2';
import Logout1 from './components/admin/Logout1';
import Forget from './components/admin/ForgetRequest'
import JournerySoFar from './components/journey-so-far/JourneySoFar';
import ReportAnIssue from './components/report-an-issue/ReportAnIssue';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path: '/report-an-issue',
      element: <ReportAnIssue />,
    },
    {
      path: '/about',
      element: <Aboutus />,
    },
    {
      path: '/gallery',
      element: <Gallery />,
    },
    {
      path: '/events',
      element: <Events />,
    },
    {
      path: '/contactus',
      element: <Contact />,
    },
    {
      path: '/workwithus',
      element: <Work />,
    },
    {
      path: '/workwithus2',
      element: <Work2 />,
    },
    {
      path: '/journey-so-far',
      element: <JournerySoFar />,
    },
    {
      path: '/donate',
      element: <Donate />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/forget',
      element: <Forget />,
    },
    {
      path: '/logout',
      element: <Logout1 />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
