import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom";
import Root from "./pages/root";
import MainScreen from "./pages/Item/items";
import Itemreport from "./pages/Item/itemreport";
import Collections from "./pages/Collection/collections";
import Item from "./pages/Item/item";

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <MainScreen /> },
      {
        path: "report",
        element: <Itemreport />,
      },
      {
        path: "collections",
        element: <Collections />,
      },
      {
        path: "item",
        element: <Item />,
      },
    ],
    
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

root.render(<App />);
