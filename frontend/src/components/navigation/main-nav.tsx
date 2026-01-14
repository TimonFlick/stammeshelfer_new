import { Link, useMatchRoute } from "@tanstack/react-router";
import { cn } from "~/lib/utils";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useUser } from "~/hooks/useUser";
import { Text } from "@/components/ui/text";
import { roleToText } from "~/utils/roles";

interface MainNavProps {
  className?: string;
}

export function MainNav({ className }: MainNavProps) {
  const matchRoute = useMatchRoute();
  const user = useUser();
  const items = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
  ].concat(
    user?.permissions.includes("todos.read") ? [{ to: "/todos", label: "Aufgaben" }]: []
  );
   
  return (
    <Menubar className={className}>
      {items.map((item) => {
        const isActive = matchRoute({ to: item.to });
        return (
          <MenubarMenu key={item.to}>
            <MenubarTrigger asChild>
              <Link
                to={item.to}
                className={cn(
                  isActive && "bg-accent text-accent-foreground font-medium"
                )}
              >
                {item.label}
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
        );
      })}
      {!user ? (
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link
              to={"/login"}
              className={cn(
                matchRoute({ to: "/login" }) &&
                  "bg-accent text-accent-foreground font-medium"
              )}
            >
              Login
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      ) : (
        <MenubarMenu>
          <MenubarTrigger>Benutzer</MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link to={"/logout"}>Tschö</Link>
            </MenubarItem>
            <MenubarItem disabled>
              <Text>E-Mail: {user.email}</Text>
            </MenubarItem>
            <MenubarItem disabled>
              <Text>Rollen: {user.roles.map((role) =>  roleToText(role)).join(", ")}</Text>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      )}
    </Menubar>
  );
}
