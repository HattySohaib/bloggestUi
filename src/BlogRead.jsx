import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "./components/Loader";
import GhostLoader from "./components/GhostLoader";

function BlogRead({ theme }) {
  const { id } = useParams();
  console.log(id);

  const [blog, setBlog] = useState([]);

  const [loading, setLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(true);

  const fetchBlogDetails = async () => {
    await fetch(
      `https://bloggestapi.sohaibaftab.me/api/blogs/blog-details?blog=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (id) fetchBlogDetails();
  }, []);

  const handleImageLoaded = () => {
    setImgLoading(false);
  };

  if (loading) return <Loader />;

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
