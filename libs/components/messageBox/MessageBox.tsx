import styles from './MessageBox.module.scss'

type TMessageBox = {
   visible: boolean
   title: string
   message: string
   status: string
   buttonText: string
   buttonAction: Function
}

export default function MessageBox({
   visible,
   title,
   message,
   status,
   buttonText,
   buttonAction,
}: TMessageBox) {
   return (
      <div
         className={`${styles.container} ${styles[`container-visible-${visible}`]} ${
            styles[`container-${status}`]
         }`}
      >
         <header className={styles.header}>{title}</header>
         <div className={styles.body}>{message}</div>
         <footer className={styles.footer}>
            <button
               onClick={buttonAction}
               className={`${styles.button} ${styles[`button-${status}`]}`}
            >
               {buttonText}
            </button>
         </footer>
      </div>
   )
}
