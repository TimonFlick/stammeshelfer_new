export type permission = "todos.delete" | "todos.create" | "todos.update" | "todos.read" | "users.delete" | "users.create" | "users.update" | "users.read";

export const permissions: Array<permission> = ["todos.delete", "todos.create", "todos.update", "todos.read", "users.delete", "users.create", "users.update", "users.read"];

export const permissionFromString = (stringPermission: string): permission | undefined => {
  const permission = stringPermission as permission;
  return permissions.find((p) => p === permission);
};

export function permissionToText(permission:permission): string {
  return {
    "todos.delete": "Aufgaben löschen",
    "todos.create": "Aufgaben erstellen",
    "todos.update": "Aufgaben aktualisieren",
    "todos.read": "Aufgaben lesen",
    "users.delete": "Benutzer löschen",
    "users.create": "Benutzer erstellen",
    "users.update": "Benutzer aktualisieren",
    "users.read": "Benutzer lesen",
  }[permission];
  }