import React, { useState } from 'react';
import Search from '../components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const result = await fetchUserData(searchParams);
      if (result.length === 0) {
        setError('No users found');
      } else {
        setUsers(result);
      }
    } catch (err) {
      console("err: ",err)
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Search onSearch={handleSearch} users={users} loading={loading} error={error} />
    </div>
  );
}

export default App;
