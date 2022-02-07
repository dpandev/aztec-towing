import React from 'react'
import styles from '../styles/LandingPage.module.css'

export const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.subheading}>
          <h4>Roadside Assistance when you need it the most</h4>
        </div>
        <div className={styles.heading}>
          <h2>The highest quality towing services</h2>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.featureBox}>
          <h3>24/7 Emergency Towing</h3>
          <h5>(719) 123-1234</h5>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.heading}>
          <h2>About</h2>
        </div>
        <div className={styles.subheading}>
          <h4>Fast and Inexpensive Towing Services</h4>
        </div>
        <div className={styles.button}>
          <a>Know More</a>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.featureImageRow}>
          <div className={styles.featureImageLarge}>
            <img className={styles.imageBig} src='' />
            <div className={styles.featureImageHeading}>
              <h3>Accidents Towing</h3>
            </div>
          </div>
          <div className={styles.featureImageSmall}>
            <img className={styles.imageSmall} src='' />
            <div className={styles.featureImageHeading}>
              <h3>Tire Change</h3>
            </div>
          </div>
        </div>
        <div className={styles.featureImageRow} id={styles.row1}>
          <div className={styles.featureImageSmall}>
            <img className={styles.imageSmall} src='' />
            <div className={styles.featureImageHeading}>
              <h3>Tire Change</h3>
            </div>
          </div>
          <div className={styles.featureImageLarge}>
            <img className={styles.imageBig} src='' />
            <div className={styles.featureImageHeading}>
              <h3>Accidents Towing</h3>
            </div>
          </div>
        </div>
        <div className={styles.featureImageRow} id={styles.row2}>
          <div className={styles.featureImageLarge}>
            <img className={styles.imageBig} src='' />
            <div className={styles.featureImageHeading}>
              <h3>Accidents Towing</h3>
            </div>
          </div>
          <div className={styles.featureImageSmall}>
            <img className={styles.imageSmall} src='' />
            <div className={styles.featureImageHeading}>
              <h3>Tire Change</h3>
            </div>
          </div>
        </div>
        <div className={styles.featureImageRow} id={styles.row3}>
          <div className={styles.featureImageSquare}>
            <img className={styles.imageSquare} src='' />
            <div className={styles.featureImageHeading}>
              <h3>Accidents Towing</h3>
            </div>
          </div>
          <div className={styles.featureImageSquare}>
            <img className={styles.imageSquare} src='' />
            <div className={styles.featureImageHeading}>
              <h3>Tire Change</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.heading}>
          <h2>Testimonials</h2>
        </div>
        <div className={styles.testomonialBox}>
          <div className={styles.profileBox}>
            <img className={styles.profileImg} src='' />
            <h3></h3>
          </div>
          <div className={styles.reviewTextbox}>
            <i className={styles.reviewTopIcon} src='' />
            <p className={styles.reviewMessage}>Lorem Ipsum</p>
            <i className={styles.reviewBottomIcon} src='' />
          </div>
        </div>
        <div className={styles.testomonialBox}>
          <div className={styles.profileBox}>
            <img className={styles.profileImg} src='' />
            <h3></h3>
          </div>
          <div className={styles.reviewTextbox}>
            <i className={styles.reviewTopIcon} src='' />
            <p className={styles.reviewMessage}>Lorem Ipsum</p>
            <i className={styles.reviewBottomIcon} src='' />
          </div>
        </div>
        <div className={styles.testomonialBox}>
          <div className={styles.profileBox}>
            <img className={styles.profileImg} src='' />
            <h3></h3>
          </div>
          <div className={styles.reviewTextbox}>
            <i className={styles.reviewTopIcon} src='' />
            <p className={styles.reviewMessage}>Lorem Ipsum</p>
            <i className={styles.reviewBottomIcon} src='' />
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.heading}>
          <h2>Testimonials</h2>
        </div>
        <div className={styles.subheading}>
          <h5></h5>
        </div>
        <div className={styles.button}>
          <a>See FAQs</a>
        </div>
      </div>
    </div>
  )
}