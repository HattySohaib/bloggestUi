import React, { useState, useEffect } from "react";

import Loader from "./components/Loader";
import BlogCard2 from "./components/BlogCard";

function Blogs({ apiKey, theme }) {
  const [loading, setLoading] = useState(true);
  const [published, setPublished] = useState([]);

  const fetchPublished = async () => {
    await fetch("https://bloggestapi.sohaibaftab.me/api/blogs/get-published", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPublished(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPublished();
  }, []);

  if (loading) return <Loader theme={theme} />;

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
