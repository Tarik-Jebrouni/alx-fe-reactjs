import React, { useState } from 'react';

const Search = ({ onSearch, users, loading, error }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md rounded-md p-6">
        <div className="flex flex-col">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label>Min Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={e => setMinRepos(e.target.value)}
            className="border p-2 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 rounded w-full">Search</button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-600">Looks like we can't find the user.</p>}
      {users && users.length > 0 && (
        <div className="mt-6 space-y-4">
          {users.map(user => (
            <div key={user.id} className="flex items-center space-x-4 border p-4 rounded shadow">
              <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
              <div>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  {user.login}
                </a>
                <p>ID: {user.id}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
