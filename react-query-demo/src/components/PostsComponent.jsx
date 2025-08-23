import React from "react";
import { useQuery } from "@tanstack/react-query"; // Updated to v5

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

function PostsComponent() {
  const { data, error, isLoading, isError, isFetching, refetch } = useQuery({
    queryKey: ["posts"], // Query key (array format is best practice)
    queryFn: fetchPosts, // Query function
    staleTime: 60000, // Cache data for 1 minute
    cacheTime: 300000, // Cache data for 5 minutes after it becomes inactive
    keepPreviousData: true, // Keep previous data when a new query is triggered
    refetchOnWindowFocus: false, // Disable refetch on window focus
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      {isFetching && <span> Updating...</span>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
