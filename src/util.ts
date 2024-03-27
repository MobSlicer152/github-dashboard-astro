import { Octokit } from "octokit";

export const octokit = new Octokit({});

export const getUser = async (name: string) => {
  const response = await octokit.request("GET /users/{username}", {
    username: name,
  });
  return response.data;
};

export const getRepos = async (user: any, count: number) => {
  if ("name" in user) {
    const response = await octokit.request("GET /users/{username}/repos", {
      username: user.login,
      per_page: count,
      page: 1,
      sort: "updated"
    });
    return response.data;
  } else {
    return null;
  }
}
