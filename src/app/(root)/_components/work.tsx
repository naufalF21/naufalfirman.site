import Image from "next/image";
import Link from "next/link";
import { ContentLayout } from "~/components/layouts/content-layout";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

const Work = () => {
  const projects = [
    {
      image:
        "https://ckn96wqsiq.ufs.sh/f/VyAcii40YBsbtW4uK8fUy0BC2PNQEvmbunLacx7VpIdwMZlR",
      name: "Satu Atap Akademik E-learning",
      desc: "An e-learning platform providing diverse online courses and hands-on offline training programs for all audiences.",
      tags: ["# web", "# freelance", "# laravel"],
    },
    {
      image:
        "https://ckn96wqsiq.ufs.sh/f/VyAcii40YBsbWguwTS9Lpv4xdhy6WJDinZz8PQqRctGCforl",
      name: "Algostudio E-attendance",
      desc: "An e-attendance platform for AlgoStudio employees, featuring attendance, leave, and overtime management.",
      tags: ["# web", "# intern", "# laravel"],
    },
  ];

  return (
    <ContentLayout title="Selected Work">
      <ul className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <li className="flex flex-col gap-6" key={index}>
            <div
              id="work"
              className="bg-primary-foreground flex h-64 w-full items-center justify-center rounded-3xl md:h-[693px]"
            >
              <div className="relative h-64 w-80 md:h-full md:w-full">
                <Image src={project.image} alt="my-work" fill priority />
              </div>
            </div>

            <div className="flex w-full flex-col items-baseline gap-3 md:flex-row md:justify-between">
              <div className="md:w-xs">
                <Link href="#">
                  <Button
                    variant="link"
                    size="xs"
                    className="hover:decoration-primary -mx-2 text-lg underline underline-offset-4 lg:mx-0"
                  >
                    {project.name}
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col gap-3 md:w-fit md:pl-16 lg:w-2xl lg:pl-0">
                <p className="font-normal">{project.desc}</p>
                <div className="flex gap-3">
                  {project.tags?.map((tag) => (
                    <Badge variant="secondary" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ContentLayout>
  );
};

export { Work };
