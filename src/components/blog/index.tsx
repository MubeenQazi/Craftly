import React from "react";
import "./index.scss";
import blog from "../../assets/images/blog.jpg";

function Blog({ data, batch }: any) {
  return (
    <div className="blog">
      <div className="blog-img" style={{ backgroundImage: `url(${blog})` }}>
        &nbsp;
      </div>
      <span className="badge bg-secondary mt-3 mb-4">{batch}</span>
      <p>{data?.title}</p>
      <div className="d-flex justify-content-between align-items-center">
        <span>{data?.author}</span>
        <span>May 11, 2022</span>
      </div>
    </div>
  );
}

export default Blog;
