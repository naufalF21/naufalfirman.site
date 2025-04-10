import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "../button";
import { GetTime } from "./get-time";

const UserInfo = async () => {
  const { execSync } = await import("child_process");
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
                {commitHash}
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { UserInfo };
