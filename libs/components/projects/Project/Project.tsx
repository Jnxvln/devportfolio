import { TProject } from '@/libs/AppTypes'
import styles from './Project.module.scss'
import dayjs from 'dayjs'

export default function Project({ project }: { project: TProject }) {
   return (
      <div className={styles['project-container']}>
         <div className={styles['project-title']}>{project.title}</div>
         <div className={styles['project-id']}>Id: {project._id}</div>
         <div className={styles['project-datePublished']}>
            {project.datePublished ? (
               <div>Published: {dayjs(project.datePublished).format('M/D/YY')}</div>
            ) : (
               <div>
                  Published:{' '}
                  <span className={styles['project-datePublished-notAvailable']}>
                     Not Available
                  </span>
               </div>
            )}
         </div>
         <div className={styles['project-summary']}>{project.summary}</div>
         <div className={styles['project-url']}>Visit: {project.url}</div>
         <div className={styles['project-repoHref']}>Repo: {project.repoHref}</div>
         <div className={styles['project-tech']}>
            Tech:{' '}
            <div className={styles['project-tech-list']}>
               {project.tech &&
                  project.tech.length > 0 &&
                  project.tech.map((tech, idx) => (
                     <span
                        key={`${tech.toLowerCase()}-${idx}`}
                        className={styles['project-tech-list-item']}
                     >
                        {tech},{' '}
                     </span>
                  ))}
            </div>
         </div>
         <div className={styles['project-thumbnailHref']}>
            Thumbnail Url: {project.thumbnailHref}
         </div>
         <div className={styles['project-description']}>
            <div>Description: </div>
            <div>{project.description}</div>
         </div>
      </div>
   )
}
