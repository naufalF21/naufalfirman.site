import Image from "next/image";
import Link from "next/link";
import { ContentLayout } from "~/components/layouts/content-layout";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

const Work = () => {
  return (
    <ContentLayout title="Selected Work">
      <ul className="flex flex-col gap-12">
        <li className="flex flex-col gap-6">
          <div
            id="work"
            className="bg-primary-foreground flex h-[693px] w-full items-center justify-center rounded-3xl"
          >
            <Image
              src="https://ckn96wqsiq.ufs.sh/f/VyAcii40YBsbtW4uK8fUy0BC2PNQEvmbunLacx7VpIdwMZlR"
              alt="my-work"
              height={1000}
              width={1000}
            />
          </div>

          <div className="flex justify-between">
            <div className="w-xs">
              <Link href="#">
                <Button
                  variant="link"
                  size="xs"
                  className="hover:decoration-primary text-lg underline underline-offset-4"
                >
                  Satu Atap Akademik E-learning
                </Button>
              </Link>
            </div>
            <div className="flex w-2xl flex-col gap-3">
              <p>
                An e-learning platform providing diverse online courses and
                hands-on offline training programs for all audiences.
              </p>
              <div className="flex gap-3">
                <Badge variant="secondary"># web</Badge>
                <Badge variant="secondary"># freelance</Badge>
                <Badge variant="secondary"># laravel</Badge>
              </div>
            </div>
          </div>
        </li>
        <li className="flex flex-col gap-6">
          <div className="bg-primary-foreground flex h-[693px] w-full items-center justify-center rounded-3xl">
            <Image
              src="https://ckn96wqsiq.ufs.sh/f/VyAcii40YBsbWguwTS9Lpv4xdhy6WJDinZz8PQqRctGCforl"
              alt="my-work"
              height={1000}
              width={1000}
            />
          </div>
          <div className="flex justify-between">
            <div className="w-xs">
              <Link href="#">
                <Button
                  variant="link"
                  size="xs"
                  className="hover:decoration-primary text-lg underline underline-offset-4"
                >
                  Algostudio E-attendance
                </Button>
              </Link>
            </div>
            <div className="flex w-2xl flex-col gap-3">
              <p>
                An e-attendance platform for AlgoStudio employees, featuring
                attendance, leave, and overtime management.
              </p>
              <div className="flex gap-3">
                <Badge variant="secondary"># web</Badge>
                <Badge variant="secondary"># intern</Badge>
                <Badge variant="secondary"># laravel</Badge>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </ContentLayout>
  );
};

export { Work };
