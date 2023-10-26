import styles from './Navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
   return (
      <nav className={styles['nav']}>
         {/* Brand */}
         <div className={styles['brand']}>
            <Link href="/">JC</Link>
         </div>

         <input type="checkbox" id="nav-toggle" className={styles['nav-toggle']} />
         <label htmlFor="nav-toggle" id="nav-label" className={styles['nav-label']}>
            &#9776;
         </label>

         {/* Navs */}
         <div className={styles['navs']}>
            {/* Primary Nav */}
            <div className={styles['nav-primary']}>
               <Link className={styles['link']} href="/">
                  Home
               </Link>
               <Link className={styles['link']} href="/about">
                  About
               </Link>
               <Link className={styles['link']} href="/projects">
                  Projects
               </Link>
               <Link className={styles['link']} href="/resume">
                  Resume
               </Link>
               <Link className={styles['link']} href="/contact">
                  Contact
               </Link>
            </div>

            {/* Secondary Nav */}
            <div className={styles['nav-secondary']}>
               <Link className={styles['link']} href="/dashboard">
                  Dashboard
               </Link>
               <Link className={styles['link']} href="/register">
                  Register
               </Link>
               <Link className={styles['link']} href="/login">
                  Login
               </Link>
               <Link className={styles['link']} href="/logout">
                  Logout
               </Link>
            </div>
         </div>
      </nav>
   )
}
