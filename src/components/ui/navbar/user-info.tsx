"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "../button";
import { GetTime } from "./get-time";
import { api } from "~/trpc/react";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const UserInfo = () => {
  const owner = "naufalF21";
  const repo = "naufalfirman.site";
  const limit = 1; // Number of commits to show

  const { data: commits } = api.github.getShortCommits.useQuery(
    {
      owner,
      repo,
      limit,
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutes until data becomes stale
      gcTime: 1000 * 60 * 60, // 60 minutes until cache is cleared
    },
  );

  return (
    <div className="bg-primary-foreground flex px-6 text-sm lg:justify-center lg:px-0">
      <div className="w-full lg:w-[950px]">
        <ul className="flex justify-between gap-6 py-3 md:justify-start">
          <li className="flex items-center gap-2">
            <Icon icon="mage:clock" width="20" height="20" />
            <span>
              <GetTime /> Pasuruan, Indonesia
            </span>
          </li>
          <li className="flex items-center">
            <Icon icon="radix-icons:commit" width="20" height="20" />
            <Link
              href="https://github.com/naufalF21/naufalfirman.site"
              target="_blank"
            >
              <Button variant="link" size="xs" className="text-sm">
                {commits?.length ? commits[0]?.shortSha : "-"}
              </Button>
            </Link>
          </li>
        </ul>
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </div>
  );
};

export { UserInfo };
