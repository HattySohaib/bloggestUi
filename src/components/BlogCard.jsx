import React, { useState } from "react";
import { Link } from "react-router-dom";

import GhostLoader from "./GhostLoader";

export const truncate = (str, n) => {
  if (!str) return "";
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

function BlogCard2({ blog, theme }) {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoaded = () => {
    setIsLoading(false);
  };
  return (
    <Link
      to={`read-this-blog/${blog?._id}`}
      key={blog._id}
      className={`recommended-blog blog-${theme}`}
    >
      {isLoading && <GhostLoader width={"100%"} height={"45%"} />}
      <img
        onLoad={handleImageLoaded}
        style={{ display: isLoading ? "none" : "block" }}
        src={blog?.banner}
        alt=""
      />
      <div className="blog-text">
        <h3>{truncate(blog.title, 50)}</h3>
        <p>{truncate(blog.meta, 80)}</p>
      </div>
      <div className="details">
        <span>{blog.date}</span>
      </div>
    </Link>
  );
}

export default BlogCard2;
