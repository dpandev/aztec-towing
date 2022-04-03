import styles from '../styles/TopInfoBar.module.css'
import React from 'react'

export const TopInfoBar = () => {

  return (
    <div className={`${styles.container} ${styles.stick}`}>
      <div className={styles.leftSide}>
        <div className={styles.linksContainer}>
          <a className={styles.link} href='tel:7193931692'>(719) 393-1692</a>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.linksContainer} id={styles.emailContainer}>
          <a className={styles.link} href='mailto:dogsdrift@gmail.com'>dogsdrift@gmail.com</a>
        </div>
      </div>
    </div>
  )
}