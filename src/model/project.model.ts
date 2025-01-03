// @ts-nocheck
export type Owner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
};

export type RepoData = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  url: string;
  languages_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  homepage: string;
  size: number;
  language: string;
  has_projects: boolean;
  has_downloads: boolean;
  has_pages: boolean;
  license: null | string;
  visibility: string;
  default_branch: string;
  topics: string[];
};

export type NativeRepoData = {
  releases?: any[];
} & RepoData;

export async function getAllRepos(): Promise<any[] | null> {
  const res = await fetch(`/.netlify/functions/getRepos`); // Call the function

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      `HTTP error! status: ${res.status} error: ${errorData.error}`,
    );
  }

  const repos = await res.json();

  return repos.filter(
    (repo) =>
      !repo.name.includes("CHRVOS352") || !repo.name.includes("online-cv"),
  );
}

export async function getNativeAppsRepos(): Promise<NativeRepoData[] | null> {
  const repos: RepoData[] | null = await getAllRepos();

  if (repos == null) return null;

  return repos.filter((repo) => repo.topics.includes("native-apps"));
}

export async function getWebSitesRepos(): Promise<RepoData[], null> {
  const repos: RepoData[] | null = await getAllRepos();

  if (repos == null) return null;

  return repos.filter((repo) => repo.topics.includes("website"));
}
