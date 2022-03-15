import styles from '../styles/Footer.module.css'
import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.contactInfo} id={styles.first}>
            <span style={{ 'textAlign': 'left' }}>Copyright © 2022&nbsp;</span>
            <span>Aztec Towing, LLC.</span>
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
