import React, { useState } from "react";

const Search = ({ onSearch, users = [], loading = false, error = null }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white shadow-md rounded-md p-6"
      >
        <div className="flex flex-col">
          <label className="text-sm font-medium">Username</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Location</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Min Repositories</label>
          <input
            type="number"
            className="p-2 border border-gray-300 rounded-md"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Below the form */}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && (
        <p className="text-center text-red-600 mt-4">
          Looks like we can't find the user.
        </p>
      )}
      {users.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-4 border rounded shadow-sm flex items-center space-x-4"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <a
                  href={user.html_url}
                  className="text-blue-500 font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
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
