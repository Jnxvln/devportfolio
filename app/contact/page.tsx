import styles from './contact.module.scss'

export default function Contact() {
   return (
      <section className={styles['contact-container']}>
         <h1 className={styles['title']}>Contact Me</h1>
         <form className={styles['form']}>
            <div className={styles['control']}>
               <label className={styles['label']}>
                  Name: <span className={styles['required']}>*</span>{' '}
               </label>
               <input
                  type="text"
                  className={styles['input']}
                  placeholder="Name"
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
                  className={styles['input']}
                  placeholder="E-mail"
                  required
               />
            </div>
            <div className={styles['control']}>
               <label className={styles['label']}>
                  Message: <span className={styles['required']}>*</span>{' '}
               </label>
               <br />
               <textarea
                  rows={4}
                  className={`${styles['input']} ${'textarea'}`}
                  placeholder="Type your message here"
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
