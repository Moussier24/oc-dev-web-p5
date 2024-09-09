import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./styles/index.scss";
import reportWebVitals from "./reportWebVitals";
import Apropos from "./screens/Apropos";
import FicheLogement from "./screens/FicheLogement";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="a-propos" element={<Apropos />} />
      <Route path="annonces/:id" element={<FicheLogement />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
