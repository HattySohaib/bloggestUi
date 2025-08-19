import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "./components/Loader";
import GhostLoader from "./components/GhostLoader";

function BlogRead({
  theme,
  apiKey,
  apiEndpoint = "https://bloggestapi.sohaibaftab.me",
}) {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);

  const [loading, setLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(true);

  const fetchBlogDetails = async () => {
    if (!apiKey) {
      console.error("API key is required to fetch blog details");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${apiEndpoint}/api/blog/${slug}`, {
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
      setBlog(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch blog details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug && apiKey) fetchBlogDetails();
  }, [slug, apiKey]);

  const handleImageLoaded = () => {
    setImgLoading(false);
  };

  if (loading) return <Loader theme={theme} />;

  return (
    <div id="blog-read" className={`blog-read-${theme}`}>
      <div className="banner-container">
        {imgLoading && (
          <GhostLoader width={"100%"} height={"50vh"} radius={"0"} />
        )}
        <img
          style={{ display: imgLoading ? "none" : "block" }}
          onLoad={handleImageLoaded}
          src={blog?.banner}
          alt=""
        />
      </div>
      <div className="blogread-info">
        <p className="blogread-title">{blog?.title}</p>
        <p className="blogread-meta">{blog?.meta}</p>
        <p className="blogread-category">
          {blog?.category}
          <span style={{ marginLeft: "1rem" }}>{blog?.date}</span>
        </p>
      </div>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog?.content }}
      ></div>
    </div>
  );
}

export default BlogRead;
