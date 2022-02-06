import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { React, useState } from 'react'

export const Navbar = () => {

  const [openMobileMenu, setopenMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setopenMobileMenu(!openMobileMenu)
  }

  return (
    <>
      <div className={styles.container}>
        <a className={styles.brandLogo} href="/">Aztec Towing</a>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href='/'>Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link href='/about'>About Us</Link>
          </li>
          <li className={styles.listItem}>
            <Link href='/services'>Services</Link>
          </li>
          <li className={styles.listItem}>
            <Link href='/testimonials'>Testimonials</Link>
          </li>
          <li className={styles.listItem}>
            <Link href='/faq'>FAQ</Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} href='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className={styles.mobileContainer}>
        <a className={styles.brandLogo} href="/">Aztec Towing</a>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href='/'>Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link href='/about'>About Us</Link>
          </li>
          <li className={styles.listItem}>
            <Link href='/services'>Services</Link>
          </li>
          <li className={styles.listItem}>
            <Link href='/testimonials'>Testimonials</Link>
          </li>
          <li className={styles.listItem}>
            <Link href='/faq'>FAQ</Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} href='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
