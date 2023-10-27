'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
   const navToggleRef = useRef<HTMLInputElement>(null)
   const [navOpen, setNavOpen] = useState(false)

   const toggleNavOpen = () => setNavOpen(!navOpen)

   const links = [
      {
         label: 'Home',
         href: '/',
      },
      {
         label: 'About',
         href: '/about',
      },
      {
         label: 'Projects',
         href: '/projects',
      },
      {
         label: 'Résumé',
         href: '/resume',
      },
      {
         label: 'Contact',
         href: '/contact',
      },
   ]

   //  Handle closing nav menu on outside click
   useEffect(() => {
      window.addEventListener('click', (e) => {
         const { id } = e?.target

         if (id === 'nav-label' || id === 'nav-toggle') {
            e.stopPropagation()
         } else {
            setNavOpen(false)
         }
      })
   }, [])

   return (
      <nav className={styles['nav']}>
         {/* Brand */}
         <div className={styles['brand']}>
            <Link href="/">JC</Link>
         </div>

         {/* Nav Toggle and Label */}
         <label htmlFor="nav-toggle" id="nav-label" className={styles['nav-label']}>
            &#9776;
         </label>
         <input
            ref={navToggleRef}
            type="checkbox"
            id="nav-toggle"
            checked={navOpen}
            onChange={toggleNavOpen}
            className={styles['nav-toggle']}
         />

         {/* Navs */}
         <div className={styles['navs']}>
            {/* Primary Nav */}
            <div className={styles['nav-primary']}>
               {links.map((link, i) => (
                  <Link key={i} className={styles['link']} href={link.href}>
                     {link.label}
                  </Link>
               ))}
            </div>

            {/* Secondary Nav */}
            <div className={styles['nav-secondary']}>
               {/* May or may not be used in the future */}
            </div>
         </div>
      </nav>
   )
}
