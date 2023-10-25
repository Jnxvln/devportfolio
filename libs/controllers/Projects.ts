export const getProjects = async () => {
  const PROJECTS_ENDPOINT = 'http://localhost:3000/api/projects'
  const res = await fetch(PROJECTS_ENDPOINT)
  if (!res.ok) throw new Error('Failed to fetch projects')

  const result = await res.json()
  const projects = result.data
  return projects
}