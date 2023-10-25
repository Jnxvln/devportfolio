import { TProject } from '@/libs/AppTypes'

export default function Project({ project }: { project: TProject }) {
   return (
      <div>
         <div>Id: {project._id}</div>
         <div>Title: {project.title}</div>
         <div>Author: {project.author}</div>
      </div>
   )
}
