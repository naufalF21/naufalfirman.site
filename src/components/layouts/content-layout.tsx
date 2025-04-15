import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

type ContentLayoutProps = {
  children: ReactNode;
  title?: string;
};

const contentLayoutVariants = cva("flex flex-col pt-16 md:pt-24", {
  variants: {
    gap: {
      default: "md:gap-12 gap-6",
      sm: "gap-6",
    },
  },
  defaultVariants: {
    gap: "default",
  },
});

const ContentLayout = ({
  className,
  children,
  gap,
  title,
  ...props
}: React.ComponentProps<typeof contentLayoutVariants> &
  VariantProps<typeof contentLayoutVariants> &
  ContentLayoutProps) => {
  return (
    <div className="flex lg:justify-center">
      <div className="lg:w-[950px]">
        <div
          className={cn(contentLayoutVariants({ gap, className }))}
          {...props}
        >
          <h1 className="text-3xl font-extrabold md:text-5xl md:leading-14">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export { ContentLayout, contentLayoutVariants };
