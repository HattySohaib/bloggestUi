// App.jsx
import { Routes, Route } from "react-router-dom";
import Blogs from "./Blogs";
import BlogRead from "./BlogRead";

import "./App.css";

function Bloggest({
  header,
  apiKey,
  theme,
  apiEndpoint = "https://bloggestapi.sohaibaftab.me",
}) {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={
          <Blogs
            header={header}
            apiKey={apiKey}
            theme={theme}
            apiEndpoint={apiEndpoint}
          />
        }
      />
      <Route
        path="read-this-blog/:id"
        element={
          <BlogRead theme={theme} apiKey={apiKey} apiEndpoint={apiEndpoint} />
        }
      />
    </Routes>
  );
}

export default Bloggest;
