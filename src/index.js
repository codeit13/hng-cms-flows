import React from "react";
import ReactDOM from "react-dom/client";

import { Sign_Up_New_Customer as FirstScreen } from "./components/Sign_Up_New_Customer";
import { Mobile_Number_Verification as SecondScreen } from "./components/Mobile_Number_Verification";
import { Interested_In as ThirdScreen } from "./components/Interested_In";
import { Enter_Mobile_Number as FourthScreen } from "./components/Enter_Mobile_Number";

import Header from "./components/Header";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <FirstScreen />,
      },
      {
        path: "/2",
        element: <SecondScreen />,
      },
      {
        path: "/3",
        element: <ThirdScreen />,
      },
      {
        path: "/4",
        element: <FourthScreen />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
