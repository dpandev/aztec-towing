import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { React, useState } from 'react'

export const Navbar = () => {

  const [openMobileMenu, setopenMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    if (openMobileMenu) {
      setopenMobileMenu(false)
    } else {
      setopenMobileMenu(true)
    }
  }

  return (
    <div className={styles.main}>
      <header className={styles.stick}>
        <div className={styles.container}>
          <img className={styles.logoImg} src='./assets/images/skullIcon.png' width={45} height={60} />
          <Link href='/'><a className={styles.brandLogo}>Aztec Towing</a></Link>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href='/'>Home</Link>
            </li>
            <li className={styles.listItem}>
              <Link href='/#about'>About Us</Link>
            </li>
            <li className={styles.listItem}>
              <Link href='/#services'>Services</Link>
            </li>
            <li className={styles.listItem}>
              <Link href='/#faq'>FAQ</Link>
            </li>
            <li className={styles.listItem}>
              <Link href='/#contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <nav className={styles.mobileContainer}>
          <div className={styles.mobileNavLeft}>
            <div className={`${styles.navHamburger} ${openMobileMenu ? styles.iconRotate : ''}`} onClick={toggleMobileMenu}>
              <svg xmlns='http://www.w3.org/2000/svg' className={styles.hamburgerIcon} width='16' height='16' viewBox='0 0 16 16' strokeWidth='2' stroke='#000000' fill='none'>
                <path stroke='none' d='M0 0h16v16H0z' fill='none'/>
                <g>
                  <line x1='0' y1='3' x2='15' y2='3' />
                  <line x1='0' y1='11' x2='15' y2='11' />
                </g>
              </svg>
            </div>
          </div>
          <div className={styles.mobileNavRight}>
            <Link href='/'><a className={styles.mobileBrand} onClick={openMobileMenu ? toggleMobileMenu : ''}>Aztec Towing</a></Link>
            <img src='./assets/images/skullIcon.png' className={styles.logoImg} width={45} height={55} />
          </div>
        </nav>
      </header>
      <div className={`${styles.mobileNavFullscreen} ${openMobileMenu ? '' : styles.displayNone} ${openMobileMenu ? styles.aboveThemAll : styles.belowThemAll}`}>
        <div className={styles.headerPush}></div>
        <div className={styles.mobileNavMenu}>
          <div className={styles.mobileNavList}>
            <Link href='/'><a onClick={toggleMobileMenu}>Home</a></Link>
            <Link href='/#about'><a onClick={toggleMobileMenu}>About Us</a></Link>
            <Link href='/#services'><a onClick={toggleMobileMenu}>Services</a></Link>
            <Link href='/#faq'><a onClick={toggleMobileMenu}>FAQ</a></Link>
            <Link href='/#contact'><a onClick={toggleMobileMenu}>Contact Us</a></Link>
          </div>
        </div>
      </div>
      <div className={`${styles.headerPush}`}></div>
    </div>
  )
}
