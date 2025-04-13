import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { ContentLayout } from "~/components/layouts/content-layout";
import { Badge } from "~/components/ui/badge";

const Work = () => {
  return (
    <ContentLayout title="Selected Work">
      <ul className="flex flex-col gap-12">
        <li className="flex flex-col gap-6">
          <div
            id="work"
            className="bg-primary-foreground flex h-[693px] w-full items-center justify-center rounded-3xl"
          >
            <Icon icon="eos-icons:bubble-loading" width="24" height="24" />
          </div>

          <div className="flex justify-between">
            <Link href="#" className="underline-offset-4 hover:underline">
              Absence Web
            </Link>
            <div className="flex w-2xl flex-col gap-3">
              <p>
                A platform that provides comprehensive data and evaluation
                reports from National Assessment for educational institutions.
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
            <Icon icon="eos-icons:bubble-loading" width="24" height="24" />
          </div>
          <div className="flex justify-between">
            <Link href="#" className="underline-offset-4 hover:underline">
              Absence Web
            </Link>
            <div className="flex w-2xl flex-col gap-3">
              <p>
                A platform that provides comprehensive data and evaluation
                reports from National Assessment for educational institutions.
              </p>
              <div className="flex gap-3">
                <Badge variant="secondary"># web</Badge>
                <Badge variant="secondary"># freelance</Badge>
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
