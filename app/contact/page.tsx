'use client'
import { useState } from 'react'
import styles from './contact.module.scss'

export default function Contact() {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')
   const [submitted, setSubmitted] = useState(false)

   const onSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log('Sending email...')

      let data = {
         name,
         email,
         message,
      }

      try {
         fetch('/api/contact', {
            method: 'POST',
            headers: {
               Accept: 'application/json, text/plain, */*',
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
         }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
               console.log('Response succeeded!')
               setSubmitted(true)
               setName('')
               setEmail('')
               setMessage('')
               alert('Response succeeded!')
            }
         })
      } catch (error) {
         console.error(error.message)
      }
   }

   return (
      <section className={styles['contact-container']}>
         <h1 className={styles['title']}>Contact Me</h1>
         <form onSubmit={onSubmit} className={styles['form']}>
            <div className={styles['control']}>
               <label className={styles['label']}>
                  Name: <span className={styles['required']}>*</span>{' '}
               </label>
               <input
                  type="text"
                  name="name"
                  className={styles['input']}
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                  required
               />
            </div>
            <div className={styles['control']}>
               <label className={styles['label']}>
                  E-mail: <span className={styles['required']}>*</span>{' '}
               </label>
               <input
                  type="email"
                  name="email"
                  className={styles['input']}
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
            </div>
            <div className={styles['control']}>
               <label className={styles['label']}>
                  Message: <span className={styles['required']}>*</span>{' '}
               </label>
               <br />
               <textarea
                  name="message"
                  className={`${styles['input']} ${'textarea'}`}
                  placeholder="Type your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
               ></textarea>
            </div>
            <div className={styles['actions']}>
               <button className={styles['btn']} type="submit">
                  Send
               </button>
               <button className={`${styles['btn']} ${styles['reset']}`} type="reset">
                  Reset
               </button>
            </div>
         </form>
      </section>
   )
}
