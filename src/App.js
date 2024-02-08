import React from "react";
import ReactDom from "react-dom";
import { RouterProvider } from "react-router-dom";
import { config } from "./Component/AllRoute";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={config} />);
