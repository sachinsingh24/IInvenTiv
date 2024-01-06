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
    'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  ];

  return (
    <section className='outreach-section'>
      <div className='anchor' id='Social'></div>
      <div className='social-media container'>
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
          responsive={responsive}>
          {images.slice(0, 5).map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                alt={`social images${index + 1}`}
                style={{ width: '100%', height: '100%' }}
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
