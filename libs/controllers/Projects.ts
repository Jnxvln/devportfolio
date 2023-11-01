import { TProject } from '../AppTypes'

export const getProjects = async (limit?: number) => {
   const PROJECTS_ENDPOINT = 'http://localhost:3000/api/projects'

   const res = await fetch(PROJECTS_ENDPOINT, {
      cache: 'no-store',
   })
   if (!res.ok) throw new Error('Failed to fetch projects')

   const result = await res.json()
   const projects: Array<TProject> = result.data

   return projects.slice(0, limit)
}
