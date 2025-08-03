import axios from 'axios';

export async function fetchUserData({ username, location, minRepos }) {
  // Construct GitHub search query
  let query = '';
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  const response = await axios.get(url);
  return response.data.items; // array of users
}
