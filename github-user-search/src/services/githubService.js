export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = [];

    if (username) query.push(`user:${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>=${minRepos}`);

    const response = await fetch(
      `https://api.github.com/search/users?q=${query.join('+')}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
