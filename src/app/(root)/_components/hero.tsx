import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "~/components/ui/button";

const Hero = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[950px]">
        <div className="flex flex-col gap-6 py-24">
          <h1 className="text-5xl leading-14 font-extrabold">
            Afnizar is a product designer who specializes in user interfaces,
            design systems, and strategy
          </h1>
          <p className="text-2xl font-normal">
            Currently, Im working at GovTech Edu, where I design platforms for
            Rapor Pendidikan. Prior to this, I gained valuable experience
            working on product design for Bukalapak, startups, and with various
            agencies.
          </p>
          <Button className="w-fit text-lg" variant="outline" size="lg">
            Selected Work
            <Icon icon="mage:arrow-down" width="24" height="24" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
