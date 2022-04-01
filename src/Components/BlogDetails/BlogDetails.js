import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogContext } from "../../App";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogs] = useContext(BlogContext);

  const blog = blogs.find((blog) => blog._id == id);

  return (
    <>
      <div className='header-gradient' />
      <div>
        <button className='back-button' onClick={() => navigate(-1)}>
          Back
        </button>
        <div className='blog-details'>
          <div className='blog-image'>
            <img src={blog?.imageURL} alt='' />
          </div>
          <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
