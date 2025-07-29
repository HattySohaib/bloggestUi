import React from "react";

function GhostLoader({ width, height, radius }) {
  return (
    <div
      style={{ width: width, height: height, borderRadius: radius }}
      className="ghost-loader"
    ></div>
  );
}

export default GhostLoader;
