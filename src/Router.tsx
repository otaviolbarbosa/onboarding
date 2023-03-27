import React from 'react';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  RedirectFunction,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Home from 'screens/Home';
import Step from 'screens/Step';

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />,
        <Route path="step/:step" element={<Step />} />
      </>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default Router;
