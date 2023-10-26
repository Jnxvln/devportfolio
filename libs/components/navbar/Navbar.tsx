'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
   const navToggleRef = useRef<HTMLInputElement>(null)
   const [navOpen, setNavOpen] = useState(false)

   const toggleNavOpen = () => setNavOpen(!navOpen)

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
