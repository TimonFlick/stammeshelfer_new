import { Button, ButtonProps } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { ForwardedRef } from "react";
export interface ActionButtonProps extends ButtonProps {
  loading?: boolean;
  ref?: ForwardedRef<HTMLButtonElement>; 
}

export function ActionButton(props: ActionButtonProps) {
  const {loading, children, ...rest}  = props
  return loading ? <Button {...rest}> <Spinner /> {children} </Button> : <Button {...rest} >{children}</Button> 
}