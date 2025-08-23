// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <Link to="/blog/1">Go to Blog Post 1</Link>
      <br />
      <Link to="/blog/2">Go to Blog Post 2</Link>
      <br />
      <Link to="/blog/3">Go to Blog Post 3</Link>
    </div>
  );
}

export default Home;
