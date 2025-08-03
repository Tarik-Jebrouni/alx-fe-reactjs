import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (params) => {
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const result = await fetchUserData(params);
      if (result.length === 0) {
        setError(true);
      } else {
        setUsers(result);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-3xl font-bold my-8">GitHub User Search</h1>
      <Search onSearch={handleSearch} users={users} loading={loading} error={error} />
    </div>
  );
};

export default App;
