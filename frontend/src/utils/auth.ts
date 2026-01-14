import { getSupabaseServerClient } from "./supabase";
import { jwtDecode } from "jwt-decode";
import { type role, roleFromString } from "./roles";
import { type permission, permissionFromString } from "./permissions";

export async function getUser() {
  const supabase = getSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user?.email) {
    return null;
  }

  const { data: sessionData } = await supabase.auth.getSession();
  let roles: Array<role> = [];
  let permissions: Array<permission> = [];

  if (sessionData.session?.access_token) {
    try {
      const jwt = jwtDecode<{ user_roles?: string[], user_permissions?: string[] }>(
        sessionData.session.access_token
      );
      console.log("JWT: ", jwt);
      roles =
        jwt.user_roles
          ?.map((role) => roleFromString(role))
          .filter((role) => role !== undefined) || [];
      permissions =
        jwt.user_permissions
          ?.map((permission) => permissionFromString(permission))
          .filter((permission) => permission !== undefined) || [];
    } catch (error) {
      console.error("Error decoding JWT:", error);
    }
  }

  return {
    email: data.user.email,
    id: data.user.id,
    roles: roles,
    permissions: permissions,
  };
}
