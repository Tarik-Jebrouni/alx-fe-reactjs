import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Await onSearch if it's async
    await onSearch({ username, location, minRepos });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-xl mx-auto">
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </div>

      <div>
        <label>Minimum Repositories</label>
        <input
          type="number"
          value={minRepos}
          onChange={e => setMinRepos(e.target.value)}
        />
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
