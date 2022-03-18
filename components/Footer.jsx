import styles from '../styles/Footer.module.css'
import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.text} id={styles.first}>
            <span style={{ 'textAlign': 'left' }}>&nbsp;Copyright © 2022</span>
            <span>&nbsp;Aztec Towing, LLC.</span>
          </div>
          <div className={styles.text} id={styles.second}>
            <p style={{ 'textAlign': 'right' }}>&nbsp;Site built by&nbsp;</p>
            <p className={styles.link}><Link href='https://github.com/dpandev'>dpandev&nbsp;</Link></p>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.contactInfo}>
            <a href='test@example.com'>help@aztec-towing.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}
