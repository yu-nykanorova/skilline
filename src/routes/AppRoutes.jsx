import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/Home";
import { Careers } from "../pages/careers/Careers";
import { AboutUs } from "../pages/aboutUs/AboutUs";
import { NotFound } from "../pages/notFound/NotFound";
import { Blog } from "../pages/blog/Blog";

export const AppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
