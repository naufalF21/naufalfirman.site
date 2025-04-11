import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

type ContentLayoutProps = {
  children: ReactNode;
  title?: string;
};

const contentLayoutVariants = cva("flex flex-col pt-24", {
  variants: {
    gap: {
      default: "gap-12",
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
    <div className="flex justify-center">
      <div className="w-[950px]">
        <div
          className={cn(contentLayoutVariants({ gap, className }))}
          {...props}
        >
          <h1 className="text-5xl leading-14 font-extrabold">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export { ContentLayout, contentLayoutVariants };
