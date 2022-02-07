import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { React, useState, useEffect } from 'react'

export const Navbar = () => {

  const [openMobileMenu, setopenMobileMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMobileMenu = () => {
    if (openMobileMenu) {
      setopenMobileMenu(false)
      setIsScrolled(false)
      window.scrollTo({top: 0})
    } else {
      setopenMobileMenu(true)
      setIsScrolled(false)
    }
  }

  const handleScroll = () => {
    if (openMobileMenu) {
      setIsScrolled(true)
    } else if (window.pageYOffset > 30) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)
  }, [])

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [openMobileMenu])

  return (
    <div className={styles.main}>
      <header className={`${isScrolled ? styles.stick : ''}`}>
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
            <a className={styles.mobileBrand} href='/'>Aztec Towing</a>
          </div>
        </nav>
      </header>
      <div className={`${styles.mobileNavFullscreen} ${openMobileMenu ? '' : styles.displayNone}`}>
        {/* <div className={styles.headerPush}></div> */}
        <div className={styles.mobileNavMenu}>
          <div className={styles.mobileNavList}>
            <a className={styles.mobileNavListItem} href='/'>Home</a>
            <a className={styles.mobileNavListItem} href='/'>About Us</a>
            <a className={styles.mobileNavListItem} href='/'>Services</a>
            <a className={styles.mobileNavListItem} href='/'>Testimonials</a>
            <a className={styles.mobileNavListItem} href='/'>FAQ</a>
            <a className={styles.mobileNavListItem} href='/'>Contact Us</a>
          </div>
        </div>
      </div>
      <div className={`${styles.headerPush} ${isScrolled ? '' : styles.displayNone}`}></div>
    </div>
  )
}
