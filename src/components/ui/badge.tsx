import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  `
    focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
    aria-invalid:ring-destructive/20 aria-invalid:border-destructive
    dark:aria-invalid:ring-destructive/40
    inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border px-2 py-0.5 text-xs
    font-medium whitespace-nowrap transition-[color,box-shadow]
    [&>svg]:pointer-events-none [&>svg]:size-3
  `,
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-transparent [a&]:hover:bg-primary/90 dark:[a&]:hover:bg-primary/80",
        secondary: `
          bg-secondary text-secondary-foreground border-transparent
          [a&]:hover:bg-secondary/90
          dark:bg-secondary/60 dark:text-secondary-foreground
        `,
        destructive: `
          bg-destructive text-destructive-foreground border-transparent
          [a&]:hover:bg-destructive/90
          focus-visible:ring-destructive/20
          dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 dark:text-destructive-foreground
        `,
        outline: `
          border-border bg-background text-foreground border
          [a&]:hover:bg-accent [a&]:hover:text-accent-foreground
          dark:bg-background dark:text-foreground
        `,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
