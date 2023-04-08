import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,  createHashRouter,  createBrowserRouter, RouterProvider} from 'react-router-dom';
import {createContext} from "react";
import Form from './Components/Form';
import Airdrop from './Components/Airdrop';
import Error from './Components/Error';
import { HashRouter } from "react-router-dom";



const router = createHashRouter([

  {
    path: "/",
    element: <App />,
  },
  {
  path: "team",
  element: <Form  />
    }, 

    {
    path: "whitelist",
    element: <Airdrop  />
      }, 
         {
    path: ":address",
    element: <Airdrop  />
      }, 
         {
    path: "*",
    element: <Error />
      }, 
  


  ])


  

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />

  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
