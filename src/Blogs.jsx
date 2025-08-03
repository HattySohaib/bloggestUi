import React, { useState, useEffect } from "react";

import Loader from "./components/Loader";
import BlogCard2 from "./components/BlogCard";

function Blogs({
  apiKey,
  theme,
  apiEndpoint = "https://bloggestapi.sohaibaftab.me",
}) {
  const [loading, setLoading] = useState(true);
  const [published, setPublished] = useState([]);
  const [error, setError] = useState(null);

  const fetchPublished = async () => {
    if (!apiKey) {
      console.error("API key is required to fetch blogs");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${apiEndpoint}/api/blogs/get-published`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPublished(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      setError("Failed to load blogs. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (apiKey) {
      fetchPublished();
    }
  }, [apiKey]);

  if (loading) return <Loader theme={theme} />;

  if (error) {
    return (
      <div
        className={`blogs-${theme}`}
        style={{ padding: "2rem", textAlign: "center" }}
      >
        <p style={{ color: "var(--txt)" }}>{error}</p>
      </div>
    );
  }

  return (
    <div id="blogs" className={`blogs-${theme}`}>
      <div className="recommended-blogs">
        <h2>My Trending Blogs</h2>
        <div className="recommended-blogs-list">
          {published.map((blog) => (
            <BlogCard2 theme={theme} blog={blog} key={blog._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
