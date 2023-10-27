import Image from 'next/image'
import styles from './LandingHero.module.scss'

export default function LandingHero() {
   return (
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
         <div className={styles['hero-filter']}></div>
         <div className={styles['hero-content-container']}>
            <div className={styles['hero-content-inner-container']}>
               <h1 className={styles['title']}>Justin Cox</h1>
               <h2 className={styles['subtitle']}>Web Developer</h2>
            </div>
         </div>
      </div>
   )
}
