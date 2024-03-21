import { Octokit } from "octokit";

export interface Repository {
  url: String;
  name: String;
  description: String;
  license?: String;
  forks: number;
  stars: number;
  lastUpdate: EpochTimeStamp;
}

export const octokit = new Octokit({});

export const getUser = (name: string) => {
  return octokit.request("GET /users/{username}", {
    username: name,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
};
