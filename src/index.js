import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom";
import Root from "./pages/root";
import MainScreen from "./pages/Item/items";
import Itemreport from "./pages/Item/itemreport";
import Collections from "./pages/Collection/collections";
import Collectionreport from "./pages/Collection/collectionreport";
import Item from "./pages/Item/item";
import RulesScreen from "./pages/Rules/rules";
import InstructionScreen from "./pages/Rules/instruction";
import Collection from "./pages/Collection/collection";

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <InstructionScreen /> },
      {
        path: "items",
        element: <MainScreen />,
      },
      {
        path: "itemreport",
        element: <Itemreport />,
      },
      {
        path: "collections",
        element: <Collections />,
      },
      {
        path: "collectionreport",
        element: <Collectionreport />,
      },
      {
        path: "item",
        element: <Item />,
      },
      {
        path: "collection",
        element: <Collection />,
      },
      {
        path: "rules",
        element: <RulesScreen />,
      },
    ],
    
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

root.render(<App />);
