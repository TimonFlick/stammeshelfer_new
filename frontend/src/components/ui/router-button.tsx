import { createLink } from "@tanstack/react-router";
import { ActionButton } from "@/components/ui/actionButton";
import { ActionButtonProps } from "@/components/ui/actionButton";
import { forwardRef } from "react";

export const RouterButton = createLink(
  forwardRef<HTMLButtonElement, ActionButtonProps>((props, ref) => {
    return <ActionButton ref={ref} {...props} />;
  })
);
