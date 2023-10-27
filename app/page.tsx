import styles from './landing.module.scss'
import LandingHero from '@/libs/components/landing/LandingHero/LandingHero'

export default function Home() {
   return (
      <main>
         <div className="grid">
            <LandingHero />
         </div>

         <section className={styles['content-section']} style={{ padding: '2em' }}>
            <div className={styles['content-wrapper']}>
               <h2 className={styles['subheading']}>Who am I?</h2>
               <p>
                  My name is Justin, I am an aspiring web developer from Texarkana, TX who
                  enjoys creating websites for individuals and small businesses.
               </p>

               <h2 className={styles['subheading']}>Experience</h2>
               <p>
                  Day-to-day I use HTML, CSS (including Sass), JavaScript, and TypeScript.
                  Frameworks and libraries used include React and NextJS primarily, Vue,
                  SolidJS, and SvelteKit.
               </p>
               <p>
                  For databases, I love to use MongoDB (with Mongoose ORM), but I also
                  have some experience with SQL and PostgreSQL databases via PrismaJS.
               </p>
               <p>
                  C++, C#, and Java are also fun contenders for console apps and GUIs,
                  though I use them less frequently.
               </p>

               <h2 className={styles['subheading']}>Goals</h2>
               <p>
                  My primary goal is to improve as a designer, developer, and programmer.
               </p>
               <p>
                  I aim to complete this portfolio, earn my first developer job, and enter
                  the world of professional web development.
               </p>
            </div>
         </section>
      </main>
   )
}
