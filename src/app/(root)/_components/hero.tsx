import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { ContentLayout } from "~/components/layouts/content-layout";
import { Button } from "~/components/ui/button";

const Hero = () => {
  return (
    <ContentLayout
      title="Afnizar is a product designer who specializes in user interfaces,
            design systems, and strategy"
      gap="sm"
    >
      <p className="text-2xl font-normal">
        Currently, Im working at GovTech Edu, where I design platforms for Rapor
        Pendidikan. Prior to this, I gained valuable experience working on
        product design for Bukalapak, startups, and with various agencies.
      </p>
      <Link href="/#work" scroll={true}>
        <Button className="w-fit text-lg" variant="outline" size="lg">
          Selected Work
          <Icon icon="mage:arrow-down" width="24" height="24" />
        </Button>
      </Link>
    </ContentLayout>
  );
};

export { Hero };
