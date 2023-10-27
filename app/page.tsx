import styles from './landing.module.scss'
import LandingHero from '@/libs/components/landing/LandingHero/LandingHero'

export default function Home() {
   return (
      <main>
         <div className="grid">
            <LandingHero />
         </div>
      </main>
   )
}
