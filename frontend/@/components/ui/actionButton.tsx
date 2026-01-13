import { Button, ButtonProps } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { ForwardedRef } from "react";
export interface ActionButtonProps extends ButtonProps {
  loading?: boolean;
  ref?: ForwardedRef<HTMLButtonElement>; 
}

export function ActionButton(props: ActionButtonProps) {
  const {loading, children} = props
  return loading ? <Button {...props}> <Spinner /> {children} </Button> : <Button {...props} /> 
}