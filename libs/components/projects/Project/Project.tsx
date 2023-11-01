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
                  src={
                     project?.thumbnailHref?.toString()
                        ? project.thumbnailHref.toString()
                        : '/placeholder_400.png'
                  }
                  alt={`${project.title?.toString()} thumbnail`}
                  fill
                  className={styles['thumbnail']}
               />
            </div>

            <div
               className={styles['content-details']}
               style={{ borderLeft: '1px solid lightgray' }}
            >
               <div className={styles['title-url']}>
                  {/* Title */}
                  <div className={styles['title']}>{project.title}</div>

                  {/* Summary */}
                  <div className={styles['summary']}>{project.summary}</div>
               </div>
            </div>
         </div>

         {/* Links */}
         <div className={styles['links']}>
            {project?.url && (
               <Link href={project.url} target="_blank">
                  <button
                     className={styles['project-btn']}
                     type="button"
                     title="Visit this website"
                  >
                     Visit
                  </button>
               </Link>
            )}

            {project?.repoHref ? (
               <Link href={project.repoHref} target="_blank">
                  <button
                     className={styles['project-btn']}
                     type="button"
                     title="Visit this repository"
                  >
                     Repo
                  </button>
               </Link>
            ) : (
               <button disabled className={styles['project-btn']}>
                  Repo (Private)
               </button>
            )}
         </div>
      </div>
   )
}
