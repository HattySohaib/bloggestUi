// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Blogs from "./Blogs";
import BlogRead from "./BlogRead";

import "./App.css";

function Bloggest({ header, apiKey, theme }) {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={<Blogs header={header} apiKey={apiKey} theme={theme} />}
      />
      <Route path="read-this-blog/:id" element={<BlogRead theme={theme} />} />
    </Routes>
  );
}

export default Bloggest;
