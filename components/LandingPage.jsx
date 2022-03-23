import React from 'react'
import styles from '../styles/LandingPage.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

export const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.section1}`} id='home'>
        <div className={styles.subheading}>
          <h4>The best towing services in Colorado</h4>
        </div>
        <div className={styles.heading}>
          <h2>Roadside Assistance when you need it the most</h2>
        </div>
      </div>
      <div className={`${styles.section} ${styles.section2}`} id='contact'>
        <div className={styles.featureBox}>
          <h3>24/7 Emergency Towing</h3>
          <h5><a href='tel:0'>(800) 555-1234</a></h5>
        </div>
      </div>
      <div className={`${styles.section} ${styles.section3}`} id='about'>
        <div className={styles.heading}>
          <h2>About</h2>
        </div>
        <div className={styles.textDivider}>
          <hr></hr>
        </div>
        <div className={styles.subheading}>
          <h4>Fast and Inexpensive Towing Services</h4>
        </div>
        <div className={styles.featureText}>
          <span>{"We've been serving the Colorado Springs community and surrounding areas for over 2 years. Our mission is to provide the best towing services at an affordable cost. Our expert drivers are trained to handle a variety of situations and we offer a handful of towing services to suit your needs. You can count on us at Aztec Towing, LLC. to be there for you when you need it most!"}</span>
        </div>
        <div className={styles.button}>
          <a href='tel:0'>Contact Us</a>
        </div>
      </div>
      <div className={`${styles.section} ${styles.section4}`} id='services'>
        <div className={styles.featureImageRow} id={styles.row1}>
          <div className={styles.featureImageLarge}>
            <div className={styles.featureImageHeading}>
              <h3>Accidents Towing</h3>
            </div>
          </div>
          <div className={styles.featureImageSmall}>
            <div className={styles.featureImageHeading}>
              <h3>Tire Change</h3>
            </div>
          </div>
        </div>
        <div className={styles.featureImageRow} id={styles.row2}>
          <div className={styles.featureImageSmall}>
            <div className={styles.featureImageHeading}>
              <h3>Jump Starting</h3>
            </div>
          </div>
          <div className={styles.featureImageLarge}>
            <div className={styles.featureImageHeading}>
              <h3>Junk Car Removal</h3>
            </div>
          </div>
        </div>
        <div className={styles.featureImageRow} id={styles.row3}>
          <div className={styles.featureImageSquare} id={styles.square1}>
            <div className={styles.featureImageIcon} id={styles.square1}>
              <AccessTimeIcon style={{ 'color': '#fff' }} className={styles.featureIcon} />
            </div>
            <div className={styles.featureImageHeading}>
              <h3>LESS THAN 1 HOUR ARRIVAL</h3>
            </div>
            <div className={styles.featureText}>
              <span>{"Don't wait hours for a tow. We strive to get you the fastest service available in the area."}</span>
            </div>
          </div>
          <div className={styles.featureImageSquare} id={styles.square2}>
            <div className={styles.featureImageIcon} id={styles.square2}>
              <PhoneInTalkIcon style={{ 'color': '#fff' }} className={styles.featureIcon} />
            </div>
            <div className={styles.featureImageHeading}>
              <h3 id={styles.headingTop}>24/7 SERVICE CALL</h3><h3 id={styles.headingBottom}>(719) 123-1234</h3>
            </div>
            <div className={styles.featureText}>
              <span>{"Call us and we'll get you the assistance you need when you need it. We're available to take your call anytime."}</span>
            </div>
          </div>
          <div className={styles.featureImageSquare} id={styles.square3}>
            <div className={styles.featureImageIcon} id={styles.square3}>
              <AttachMoneyIcon style={{ 'color': '#fff' }} className={styles.featureIcon} />
            </div>
            <div className={styles.featureImageHeading}>
              <h3>AFFORDABLE PRICES ALWAYS</h3>
            </div>
            <div className={styles.featureText}>
              <span>{"We provide the reliable and quick towing services at reasonable and affordable costs."}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.section} ${styles.section7}`} id='faq'>
        <div className={styles.heading}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className={styles.textDivider}>
          <hr></hr>
        </div>
        <div className={styles.faq}>
        <input id='faq-a' type='checkbox' />
          <label htmlFor='faq-a'>
            <p className={styles.faqHeading}>{"What areas does Aztec Towing operate in?"}</p>
            <div className={styles.faqArrow}></div>
            <p className={styles.faqText}>{"We operate in Colorado Springs and the surrounding areas."}</p>
          </label>
          <input id='faq-b' type='checkbox' />
          <label htmlFor='faq-b'>
            <p className={styles.faqHeading}>{"How much does a standard tow cost?"}</p>
            <div className={styles.faqArrow}></div>
            <p className={styles.faqText}>{"The cost can vary depending various factors like tow distance and type of vehicle. Contact us to see what we can do for you!"}</p>
          </label>
          <input id='faq-c' type='checkbox' />
          <label htmlFor='faq-c'>
            <p className={styles.faqHeading}>{"How much does it cost to tow an RV?"}</p>
            <div className={styles.faqArrow}></div>
            <p className={styles.faqText}>{"There are multiple variables factored into the cost, such as towing distance and size/weight of the vehicle."}</p>
          </label>
          <input id='faq-d' type='checkbox' />
          <label htmlFor='faq-d'>
            <p className={styles.faqHeading}>{"Will towing ruin my vehicle transmission?"}</p>
            <div className={styles.faqArrow}></div>
            <p className={styles.faqText}>{"Our drivers are professionally trained to tow vehicles without inccurring any damage to your vehicle whatsoever. Your vehicle is safe in our hands guarenteed!"}</p>
          </label>
          <input id='faq-e' type='checkbox' />
          <label htmlFor='faq-e'>
            <p className={styles.faqHeading}>{"Does my car insurance cover towing?"}</p>
            <div className={styles.faqArrow}></div>
            <p className={styles.faqText}>{"Please check with your auto insurance provider for details on what your policy covers."}</p>
          </label>
        </div>
      </div>
    </div>
  )
}