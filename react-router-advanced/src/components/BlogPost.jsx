// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // Get the dynamic 'id' from the URL

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>
        This is the content of blog post {id}. You can fetch actual blog content
        based on this ID from an API.
      </p>
    </div>
  );
}

export default BlogPost;
