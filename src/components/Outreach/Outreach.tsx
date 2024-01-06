/** @format */

import './Outreach.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Outreach = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };
  const images = [
    require('../../images/social/social_media_0.png'),
    require('../../images/social/social_media_1.png'),
    require('../../images/social/social_media_2.png'),
    require('../../images/social/social_media_3.png'),
    require('../../images/social/social_media_4.png'),
    require('../../images/social/social_media_5.png'),
    require('../../images/social/social_media_6.png'),
    require('../../images/social/social_media_7.png'),
    require('../../images/social/social_media_8.png'),
    require('../../images/social/social_media_9.png'),
    require('../../images/social/social_media_10.png'),
    require('../../images/social/social_media_11.png'),
    require('../../images/social/social_media_12.png'),
    require('../../images/social/social_media_13.png'),
    require('../../images/social/social_media_14.png'),
    require('../../images/social/social_media_15.png'),
    require('../../images/social/social_media_16.png'),
    require('../../images/social/social_media_17.png'),
    require('../../images/social/social_media_18.png'),
    require('../../images/social/social_media_19.png'),
    require('../../images/social/social_media_20.png'),
    require('../../images/social/social_media_21.png'),
    require('../../images/social/social_media_22.png'),
    require('../../images/social/social_media_23.png'),
    require('../../images/social/social_media_24.png'),
  ];

  return (
    <section className='outreach-section'>
      <div className='anchor' id='Social'></div>
      <div className='social-media'>
        <h2>Social media clips etc</h2>

        <Carousel
          ssr
          // partialVisbile
          // deviceType={deviceType}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2500}
          rewind={true}
          itemClass='image-item'
          responsive={responsive}
        >
          {images.slice(0, 5).map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                alt={`social images${index + 1}`}
                style={{ width: '400px', height: '500px' }}
              />
            );
          })}
        </Carousel>
      </div>
      <div className='anchor' id='Register'></div>
      <div className='register container pb-5'>
        <h2>Register</h2>
        <p>
          The R&D fair is open to all Academia & Industry and no entry fee or
          participation registration is mandatory. However, you may register at
          the following link for convenient experience and regular updates of
          the event:{' '}
        </p>
        <a href='https://forms.gle/4q2syxLsh5C9AmSt5'>
          <button type='button' className='btn btn-secondary btn-md'>
            Register Now
          </button>
        </a>
      </div>
    </section>
  );
};

export default Outreach;
