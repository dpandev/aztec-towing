import styles from '../styles/Footer.module.css'
import React from 'react'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.text}>
            <span>Copyright © 2022&nbsp;</span>
            <span>Aztec Towing Services, LLC.</span>
          </div>
          <div className={styles.text}>
            <span>Site built by <a href='/'>Silver Crate Studios</a></span>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.contactInfo}>
            <a href='/'>contact@example.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}
