import { TProject } from '@/libs/AppTypes'
import Image from 'next/image'
import styles from './Project.module.scss'
import Link from 'next/link'
import dayjs from 'dayjs'

export default function Project({ project }: { project: TProject }) {
   return (
      <div className={styles['project-container']}>
         <div className={styles['main-content']}>
            {/* Thumbnail */}
            <div className={styles['thumbnail-wrapper']}>
               <Image
                  src="/placeholder_400.svg"
                  alt={`${project.title?.toString()}`}
                  fill
                  className={styles['thumbnail']}
               />
            </div>

            {/* Title */}
            <div className={styles['title']}>{project.title}</div>

            {/* Summary */}
            <div className={styles['summary']}>{project.summary}</div>
         </div>

         {/* Links */}
         <div className={styles['links']}>
            {project?.url && (
               <Link href={project.url}>
                  <button type="button" title="Visit this website">
                     Visit
                  </button>
               </Link>
            )}

            {project?.repoHref && (
               <Link href={project.repoHref}>
                  <button type="button" title="Visit this repository">
                     Repo
                  </button>
               </Link>
            )}
         </div>
      </div>
   )
}
