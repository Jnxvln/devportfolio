import Image from 'next/image'
import styles from './landing.module.scss'

export default function Home() {
   return (
      <main>
         <div className={styles['hero']}>
            <Image
               className={styles['hero-image']}
               src="/landing_hero.jpg"
               alt="landing page image"
               priority
               fill
               sizes="100vw"
               style={{
                  objectFit: 'cover',
               }}
            />
            <div className={styles['hero-content-container']}>
               <div className={styles['hero-content-inner-container']}>
                  <h1>Justin Cox</h1>
                  <h2>Web Developer</h2>
               </div>
            </div>
         </div>
      </main>
   )
}
