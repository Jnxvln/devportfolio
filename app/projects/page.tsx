import { getProjects } from '../../libs/controllers/Projects'
import styles from './projects.module.scss'
import { TProject } from '@/libs/AppTypes'

export default async function Projects() {
   const projects = await getProjects()

   return (
      <section>
         <h1 className={styles['heading-1']}>Projects</h1>
         <ul className={styles['projects-list-container']}>
            {projects.map((project: TProject) => (
               <li key={project._id}>
                  <div>Id: {project._id}</div>
                  <div>Title: {project.title}</div>
                  <div>Author: {project.author}</div>
               </li>
            ))}
         </ul>
      </section>
   )
}
