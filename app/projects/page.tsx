const getProjects = async () => {
   const PROJECTS_ENDPOINT = 'http://localhost:3000/api/projects'
   const res = await fetch(PROJECTS_ENDPOINT)
   if (!res.ok) throw new Error('Failed to fetch projects')

   const result = await res.json()
   const projects = result.data
   console.log('PROJECTSSSS:', projects)
   return projects
}

type TProject = {
   title?: string
   author?: string
}

export default async function Projects() {
   const projects = await getProjects()

   console.log('PROJECTS:', projects)

   return (
      <div>
         <h1>Projects</h1>
         {projects.map((project: TProject) => (
            <>
               <div>Title: {project.title}</div>
               <div>Author: {project.author}</div>
            </>
         ))}
      </div>
   )
}
