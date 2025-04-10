import { Icon } from "@iconify/react";
import Link from "next/link";
import { execSync } from "child_process";
import { Button } from "../button";
import { GetTime } from "./get-time";
import { env } from "~/env";

const UserInfo = () => {
  const commitHash = execSync("git rev-parse --short HEAD").toString().trim();

  return (
    <div className="bg-primary-foreground flex justify-center text-sm">
      <div className="w-[950px]">
        <ul className="flex gap-6 py-3">
          <li className="flex items-center gap-2">
            <Icon icon="mage:clock" width="20" height="20" />
            <span>
              <GetTime /> Pasuruan, Indonesia
            </span>
          </li>
          <li className="flex items-center">
            <Icon icon="radix-icons:commit" width="20" height="20" />
            <Link href="https://github.com/naufalF21/naufalfirman.site">
              <Button variant="link" size="xs" className="text-sm">
                {env.NODE_ENV === "development"
                  ? commitHash
                  : process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7)}
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { UserInfo };
