import Project from '../Project/Project'
import styles from './ProjectList.module.scss'
import { TProject } from '@/libs/AppTypes'

export default function ProjectList({ projects }: { projects: TProject[] }) {
   return (
      <ul className={styles['projects-list-container']}>
         {projects.map((project: TProject) => (
            <li key={project._id}>
               <Project project={project} />
            </li>
         ))}
      </ul>
   )
}
