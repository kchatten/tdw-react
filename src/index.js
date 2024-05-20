import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, useRouteError, RouterProvider, Route, Outlet } from 'react-router-dom';
import './css/global.css';
import reportWebVitals from './reportWebVitals';

import Header from './header';
import HomePage from './homepage';
import HealthPage from './healthpage';

function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);
  return (
    <div id="error-container">
      <img id="error-image" src={`http://http.cat/${error.status}.jpg`} />
      <span id="error-message">
        <p>Error {error.status}: {error.error.message}</p>
      </span>
    </div> // End #error-message
  )
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <>
          <Header />
          <Outlet />
        </>
      }
      errorElement={<ErrorBoundary />}
    >
      <Route path="/" element={<HomePage />} />
      <Route path="/health" element={<HealthPage />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
