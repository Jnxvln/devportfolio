import styles from './landing.module.scss'
import LandingHero from '@/libs/components/landing/LandingHero/LandingHero'
import Image from 'next/image'

export default function Home() {
   return (
      <main>
         <div className={styles['grid-hero']}>
            <LandingHero />
         </div>

         <section className={styles['content-section']}>
            <div className={styles['content-wrapper']}>
               {/* WHO AM I? */}
               <div className={styles['whoami']}>
                  {/* Description */}
                  <div>
                     <h2 className={styles['subheading']}>Who am I?</h2>
                     <p>
                        My name is Justin, I am an aspiring web developer from Texarkana,
                        TX who enjoys creating websites for people.
                     </p>
                  </div>
               </div>

               {/* EXPERIENCE */}
               <div className={styles['experience']}>
                  <div className={styles['image-wrapper']}>
                     <Image
                        className={styles['experience-img']}
                        src="/experience.jpg"
                        alt="Experience"
                        fill
                     />
                  </div>
                  <div>
                     <h2 className={styles['subheading']}>Experience</h2>
                     <p>
                        Day-to-day I use HTML, CSS (including Sass), JavaScript, and
                        TypeScript. Frameworks and libraries used include React and NextJS
                        primarily, Vue, SolidJS, and SvelteKit.
                     </p>
                     <p>
                        For databases, I love to use MongoDB (with Mongoose ORM), but I
                        also have some experience with SQL and PostgreSQL databases via
                        PrismaJS.
                     </p>
                     <p>
                        C++, C#, and Java are also fun contenders for console apps and
                        GUIs, though I use them less frequently.
                     </p>
                  </div>
               </div>

               {/* GOALS */}
               <div className={styles['goals']}>
                  <div className={styles['image-wrapper']}>
                     <Image
                        className={styles['goals-img']}
                        src="/goals.jpg"
                        alt="Goals"
                        fill
                     />
                  </div>
                  <div className={styles['goals-content-wrapper']}>
                     <h2 className={styles['subheading']}>Goals</h2>
                     <p>
                        My primary goal is to improve as a designer, developer, and
                        programmer. I aim to complete this portfolio and earn my first
                        developer job.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}
