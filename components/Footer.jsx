import styles from '../styles/Footer.module.css'
import React from 'react'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.text} id={styles.first}>
            <span style={{ 'text-align': 'left' }}>Copyright © 2022&nbsp;</span>
            <span>Aztec Towing, LLC.</span>
          </div>
          <div className={styles.text} id={styles.second}>
            <p style={{ 'text-align': 'right' }}>Site built by&nbsp;</p>
            <p><a href='/'>Silver Crate Studios</a></p>
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
