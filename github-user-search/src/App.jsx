import React, { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (params) => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchUserData(params);
      setUsers(results);
      if (results.length === 0) setError("No users found");
    } catch {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Search
      onSearch={handleSearch}
      users={users}
      loading={loading}
      error={error}
    />
  );
};

export default App;
