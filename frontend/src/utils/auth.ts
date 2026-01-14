import { getSupabaseServerClient } from './supabase'
import { jwtDecode } from 'jwt-decode'

type role = 'admin' | 'stammesfuehrung' | 'stammesmitglied'

const roles: Array<role> = ['admin', 'stammesfuehrung', 'stammesmitglied']

const roleFromString = (stringRole: string): role  | undefined => {
  const role = stringRole as role 
  return roles.find((r) => r === role) 

}

export async function getUserWithRoles() {
  const supabase = getSupabaseServerClient()
  const { data } = await supabase.auth.getUser()
  
  if (!data.user?.email) {
    return null
  }

  const { data: sessionData } = await supabase.auth.getSession()
  let roles: Array<role> = []
  
  if (sessionData.session?.access_token) {
    try {
      const jwt = jwtDecode<{ user_roles?: string[] }>(sessionData.session.access_token)
      console.log("JWT: ", jwt)
      roles = jwt.user_roles?.map((role) => roleFromString(role)).filter((role) => role !== undefined) || []
     
    } catch (error) {
      console.error('Error decoding JWT:', error)
    }
  }

  return {
    email: data.user.email,
    id: data.user.id,
    roles: roles,
  }
}