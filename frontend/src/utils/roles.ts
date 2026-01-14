
export type role = "admin" | "stammesfuehrung" | "stammesmitglied";

export const roles: Array<role> = ["admin", "stammesfuehrung", "stammesmitglied"];

export const roleFromString = (stringRole: string): role | undefined => {
  const role = stringRole as role;
  return roles.find((r) => r === role);
};

export function roleToText(role:role): string {
  return {
    "admin": "Admin",
    "stammesfuehrung": "Stammesführung",
    "stammesmitglied": "Stammesmitglied",
  }[role];
  }