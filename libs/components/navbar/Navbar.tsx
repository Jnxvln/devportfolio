'use client'
import { useEffect, useRef } from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
   const navToggleRef = useRef<HTMLInputElement>(null)

   useEffect(() => {
      window.addEventListener('click', (evt) => {
         if (evt?.target?.id === 'nav-label') {
            console.log('clicked LABEL')
            // evt.stopPropagation()
         } else {
            console.log('clicked BODY')
            // navToggleRef.current.checked = false
         }
      })
   }, [])

   return (
      <nav className={styles['nav']}>
         {/* Brand */}
         <div className={styles['brand']}>
            <Link href="/">JC</Link>
         </div>

         <label htmlFor="nav-toggle" id="nav-label" className={styles['nav-label']}>
            &#9776;
         </label>
         <input
            ref={navToggleRef}
            type="checkbox"
            id="nav-toggle"
            className={styles['nav-toggle']}
         />

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
