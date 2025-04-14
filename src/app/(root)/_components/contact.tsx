"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";
import { ContentLayout } from "~/components/layouts/content-layout";
import { Button } from "~/components/ui/button";

const Contact = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const textToCopy = "naufalfirman098@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const sosials = [
    {
      name: "Github",
      link: "https://github.com/naufalF21",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/naufal-firman/",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/naufalfirman__/",
    },
  ];

  return (
    <ContentLayout title="Feel free to reach out" gap="sm">
      <div className="flex flex-col gap-12 pb-6 font-normal">
        <p className="text-lg md:text-2xl">
          I am always open to new opportunities and collaborations. If you have
          any questions or need help with a project,
          <Button
            variant="link"
            size="xs"
            className="hover:decoration-primary -mx-2 text-xl font-normal underline underline-offset-4 md:mx-0 md:text-2xl [&_svg:not([class*='size-'])]:size-5 md:[&_svg:not([class*='size-'])]:size-6"
            onClick={handleCopy}
          >
            {isCopied ? (
              "email address copied!"
            ) : (
              <>
                reach out to me via email{" "}
                <Icon icon="mage:copy" width="24" height="24" />
              </>
            )}
          </Button>
        </p>
        <p className="underline-offset-2">
          Follow me for more thoughts and updates on
          {sosials.map((sosial, index) => (
            <Link
              href={sosial.link}
              target="_blank"
              className="inline-flex underline"
              key={index}
            >
              <Button
                variant="link"
                size="xs"
                className="px-1 py-0 font-normal"
              >
                {sosial.name}
              </Button>
            </Link>
          ))}
        </p>
      </div>
    </ContentLayout>
  );
};

export { Contact };
