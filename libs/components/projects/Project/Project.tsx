import { TProject } from '@/libs/AppTypes'
import styles from './Project.module.scss'

export default function Project({ project }: { project: TProject }) {
   return (
      <div className={styles['project-container']}>
         <div>Id: {project._id}</div>
         <div>{project.title}</div>
         <div>{project.summary}</div>
         <div>Thumbnail HREF: {project.thumbnailHref}</div>
         <div>
            <div>Description: </div>
            <div>{project.description}</div>
         </div>
      </div>
   )
}
