// server/api/routers/github.ts
import { z } from "zod";
import { Octokit } from "octokit";
import { createTRPCRouter, publicProcedure } from "../trpc";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export const githubRouter = createTRPCRouter({
  getShortCommits: publicProcedure
    .input(
      z.object({
        owner: z.string(),
        repo: z.string(),
        limit: z.number().min(1).max(100).default(5),
      }),
    )
    .query(async ({ input }) => {
      const { data } = await octokit.rest.repos.listCommits({
        owner: input.owner,
        repo: input.repo,
        per_page: input.limit,
      });

      return data.map((commit) => ({
        shortSha: commit.sha.substring(0, 7), // Get first 7 characters
        url: commit.html_url,
      }));
    }),
});
