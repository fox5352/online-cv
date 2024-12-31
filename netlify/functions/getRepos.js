import fetch from 'node-fetch';

export default async (event, context) => {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  if (!GITHUB_TOKEN) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "GITHUB_TOKEN is not defined" }),
    };
  }

  try {
    let page = 1;
    const allRepos = [];

    while (true) {
      const response = await fetch(
        `https://api.github.com/users/fox5352/repos?page=${page}&per_page=100`,
        {
          method: "GET",
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );

      if (!response.ok) {
        console.error("GitHub API Error:", response.status, await response.text());
        return {
          statusCode: response.status,
          body: JSON.stringify({ error: `GitHub API returned ${response.status}` }),
        };
      }

      const repos = await response.json();

      if (repos.length === 0) break;

      allRepos.push(...repos);
      page++;
    }

     return new Response(JSON.stringify(allRepos), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })

  } catch (error) {
    console.error("Fetch Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch repos" })
      ,{
      statusCode: 500
    });
  }
};