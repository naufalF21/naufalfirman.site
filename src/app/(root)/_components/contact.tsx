import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { ContentLayout } from "~/components/layouts/content-layout";
import { Button } from "~/components/ui/button";

const Contact = () => {
  return (
    <ContentLayout title="Feel free to reach out" gap="sm">
      <p className="text-2xl font-normal">
        I am always open to new opportunities and collaborations. If you have
        any questions or need help with a project,
        <Link href="#" className="inline-flex underline underline-offset-4">
          <Button
            variant="link"
            size="xs"
            className="text-2xl font-normal [&_svg:not([class*='size-'])]:size-6"
          >
            reach out via email <Icon icon="mage:copy" width="24" height="24" />
          </Button>
        </Link>
      </p>
      <p className="py-6">
        Follow me for more thoughts and updates on Github, Linkedin and
        Instagram
      </p>
    </ContentLayout>
  );
};

export { Contact };
