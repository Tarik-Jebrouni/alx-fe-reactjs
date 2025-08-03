import React, { useState } from "react";

const Search = ({ onSearch, users = [], loading = false, error = null }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSearch({ username, location, minRepos });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Search inputs */}
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Minimum Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering for loading */}
      {loading && <p>Loading...</p>}

      {/* Conditional rendering for error */}
      {error && <p>Looks like we can't find the user.</p>}

      {/* Conditional rendering for users list */}
      {users.length > 0 && (
        <div className="mt-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="border p-2 my-2 rounded flex items-center space-x-4"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
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
