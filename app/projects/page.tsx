import Link from 'next/link'
import ProjectList from '@/libs/components/projects/ProjectList/ProjectList'
import { TProject } from '@/libs/AppTypes'
import { getProjects } from '../../libs/controllers/Projects'
import CurrentExtensions from '@/libs/data/CurrentExtensions'
import styles from './projects.module.scss'

export default async function Projects() {
   const projects: TProject[] = await getProjects(4)

   return (
      <section className={styles['page-container']}>
         <section className={styles['projects-container']}>
            {/* Top 4 */}
            <div className={styles['projects-top4']}>
               <h1 className={`${styles['title']} ${styles['text-center']}`}>Projects</h1>
               <h2 className={`${styles['subtitle']} ${styles['text-center']}`}>Top 4</h2>
               <br />
               <ProjectList projects={projects} />
            </div>
         </section>

         <section className={styles['section-setup']}>
            <h2 className={styles['subtitle']}>My Setup</h2>
            <p className={styles['p']}>
               I use <strong>Visual Studio Code</strong> as my IDE of choice, plus a
               handful of extensions to improve my development experience, listed below.
            </p>
            <p className={styles['p']} style={{ marginTop: '0.5em' }}>
               Please note that these were added slowly over a long period of time, and
               not all are actively used:
            </p>
            <ul className={styles['extensions-list']}>
               {CurrentExtensions &&
                  CurrentExtensions.length > 0 &&
                  CurrentExtensions.map((ext, idx) => <li key={idx}>{ext}</li>)}
            </ul>
         </section>

         <section className={styles['resume-container']}>
            <div className={styles['resume']}>
               <Link href="/resume">
                  <h3 className={styles['resume-link']}>View Résumé</h3>
               </Link>
            </div>
         </section>
      </section>
   )
}
