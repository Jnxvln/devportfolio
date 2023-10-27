import ProjectList from '@/libs/components/projects/ProjectList/ProjectList'
import { TProject } from '@/libs/AppTypes'
import { getProjects } from '../../libs/controllers/Projects'
import styles from './projects.module.scss'

export default async function Projects() {
   const projects: TProject[] = await getProjects()

   return (
      <section className={styles['projects-section']}>
         <h1 className={styles['projects-title']}>Projects</h1>
         <ProjectList projects={projects} />
      </section>
   )
}
