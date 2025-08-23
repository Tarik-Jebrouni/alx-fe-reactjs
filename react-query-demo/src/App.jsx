import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./PostsComponent.jsx"; // Note the .jsx extension

// Create a QueryClient instance to manage queries
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
