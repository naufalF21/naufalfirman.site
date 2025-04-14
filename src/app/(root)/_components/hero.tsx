import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { ContentLayout } from "~/components/layouts/content-layout";
import { Button } from "~/components/ui/button";

const Hero = () => {
  return (
    <ContentLayout
      title="Hello, I am Naufal Firman from Indonesia. A fullstack web developer obsessed with crafting emerging tech."
      gap="sm"
    >
      <p className="text-lg font-normal md:text-2xl">
        Currently, I work as a freelance web developer. I build websites for
        clients in different industries. Previously, I gained valuable
        experience in building websites from freelancing and internship during
        college.
      </p>
      <Link href="/#work" scroll={true}>
        <Button className="w-full text-lg md:w-fit" variant="outline" size="lg">
          Selected Work
          <Icon icon="mage:arrow-down" width="24" height="24" />
        </Button>
      </Link>
    </ContentLayout>
  );
};

export { Hero };
