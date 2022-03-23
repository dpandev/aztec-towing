import styles from '../styles/TopInfoBar.module.css'
import React from 'react'

export const TopInfoBar = () => {

  return (
    <div className={`${styles.container} ${styles.stick}`}>
      <div className={styles.leftSide}>
        <div className={styles.linksContainer}>
          <a className={styles.link} href='tel:0'>(800) 555 1234</a>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.linksContainer} id={styles.emailContainer}>
          <a className={styles.link} href='mailto:test@domain.com'>help@aztec-towing.com</a>
        </div>
      </div>
    </div>
  )
}