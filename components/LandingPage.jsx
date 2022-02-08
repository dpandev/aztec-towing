import React from 'react'
import styles from '../styles/LandingPage.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.section1}`} id={styles.section1}>
        <div className={styles.subheading}>
          <h4>Roadside Assistance when you need it the most</h4>
        </div>
        <div className={styles.heading}>
          <h2>The highest quality towing services</h2>
        </div>
      </div>
      <div className={styles.section} id={styles.section2}>
        <div className={styles.featureBox}>
          <h3>24/7 Emergency Towing</h3>
          <h5><a href='tel:0'>(719) 123-1234</a></h5>
        </div>
      </div>
      <div className={styles.section} id={styles.section3}>
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
          <span>Maecenas posuere accumsan laoreet. Donec id sem quam. Mauris pulvinar magna nec odio iaculis tristique. Morbi ex mi, auctor vestibulum ultricies ac, facilisis ac ipsum. Nullam commodo consequat augue, id cursus nisl. Duis lobortis sodales velit, quis maximus urna commodo ultricies. Nam hendrerit dui erat. Donec eu consequat augue. Mauris quis elit dignissim, lacinia odio lacinia, eleifend lorem. Pellentesque ut condimentum augue, et molestie turpis. Morbi porttitor sollicitudin egestas.</span>
        </div>
        <div className={styles.button}>
          <a>Know More</a>
        </div>
      </div>
      <div className={styles.section} id={styles.section4}>
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
              <h3>On-site Repair</h3>
            </div>
          </div>
        </div>
        <div className={styles.featureImageRow} id={styles.row3}>
          <div className={styles.featureImageSquare} id={styles.square1}>
            <div className={styles.featureImageIcon} id={styles.square1}>
              <AccessTimeIcon style={{ 'color': '#fff' }} className={styles.featureIcon} />
            </div>
            <div className={styles.featureImageHeading}>
              <h3>LESS THAN 30 MIN ARRIVAL</h3>
            </div>
            <div className={styles.featureText}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
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
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
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
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section} id={styles.section5}>
        <div className={styles.heading}>
          <h2>Testimonials</h2>
        </div>
        <div className={styles.textDivider}>
          <hr></hr>
        </div>
        <div className={styles.testimonialBox}>
          <div className={styles.profileBox}>
            <img className={styles.profileImg} src='/assets/images/reviewProfileImg1.jpg' />
            <h3>Carmen Reeds</h3>
          </div>
          <div className={styles.reviewTextbox}>
            <div className={styles.topIcon}>
              <FormatQuoteIcon style={{ 'color': '#fff' }} className={styles.featureIcon} />
            </div>
            <p className={styles.reviewMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere accumsan laoreet. Donec id sem quam. Mauris pulvinar magna nec odio iaculis tristique.</p>
            <div className={styles.bottomIcon}>
              <FormatQuoteIcon style={{ 'color': '#fff' }} className={styles.featureIcon} />
            </div>
          </div>
        </div>
        <div className={styles.testimonialBox}>
          <div className={styles.profileBox}>
            <img className={styles.profileImg} src='/assets/images/reviewProfileImg2.jpg' />
            <h3>James DeBeau</h3>
          </div>
          <div className={styles.reviewTextbox}>
            <div className={styles.topIcon}>
              <FormatQuoteIcon style={{ 'color': '#fff' }} className={styles.featureIcon} />
            </div>
            <p className={styles.reviewMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere accumsan laoreet. Donec id sem quam. Mauris pulvinar magna nec odio iaculis tristique.</p>
            <div className={styles.bottomIcon}>
              <FormatQuoteIcon style={{ 'color': '#fff' }} className={styles.featureIcon} />
            </div>
          </div>
        </div>
        <div className={styles.testimonialBox}>
          <div className={styles.profileBox}>
            <img className={styles.profileImg} src='/assets/images/reviewProfileImg3.jpg' />
            <h3>Kathrine Miller</h3>
          </div>
          <div className={styles.reviewTextbox}>
            <div className={styles.topIcon}>
              <FormatQuoteIcon style={{ 'color': '#fff' }} className={styles.featureIcon} />
            </div>
            <p className={styles.reviewMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere accumsan laoreet. Donec id sem quam. Mauris pulvinar magna nec odio iaculis tristique.</p>
            <div className={styles.bottomIcon}>
              <FormatQuoteIcon style={{ 'color': '#fff' }} className={styles.featureIcon} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.section} id={styles.section6}>
        <div className={styles.leftSide}>
          <div className={styles.heading}>
            <h2>Contact Us</h2>
          </div>
          <div className={styles.textDivider}>
            <hr></hr>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <i></i>
              <span></span>
            </div>
            <div className={styles.contactItem}>
              <i></i>
              <span></span>
            </div>
            <div className={styles.contactItem}>
              <i></i>
              <span></span>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.button}>
            <a>See FAQs</a>
          </div>
        </div>
      </div> */}
    </div>
  )
}