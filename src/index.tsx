import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ClassPage } from "./classPage/ClassPage";
import { Main } from "./main/Main";
import reportWebVitals from "./reportWebVitals";
import backgroundImage from "./images/background.jpg";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-image: url(${backgroundImage})
  }
  p {line-height: 1.5;}
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/:classNumber/:themeNumber",
    element: <ClassPage />,
  },
]);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
