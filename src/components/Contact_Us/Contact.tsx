/** @format */

import './Contact_Us.css';

const Contact = () => {
  // const form: any = useRef();
  // const validateSubmitForm = () => {};
  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   emailjs
  //     .sendForm(
  //       'shivhome_formid',
  //       'template_tjqs146',
  //       form.current,
  //       'gf8rXDhegAr-dVvvL'
  //     )
  //     .then(
  //       (result: any) => {
  //         console.log(result.text);
  //         window.alert('message send');
  //       },
  //       (error: any) => {
  //         console.log(error.text);
  //         window.alert('please try again...');
  //       }
  //     );
  //   event.target.reset();
  // };
  return (
    <section className='contact-section'>
      <div className='contact-details container'>
        <h3>IInvenTiv Secretariat contact info</h3>
        <p>Email: iinventive@iith.ac.in</p>
        <p>Contact: 04023016208</p>
      </div>
    </section>
  );
  // return (
  //   <section className='bg-white'>
  //     <div className='container about_us-p'>
  //       <div className='contact-brand text-center'>
  //         <h1>Connect with Us</h1>
  //         <p>Contact our team of experts for all your real estate needs.</p>
  //         <div className='row justify-content-center'>
  //           <div className='col-md-4 m-auto'>
  //             <img
  //               src={require('../../Assets/Shiv Paradise logo.png')}
  //               alt=''
  //               width='300px'
  //               className='img-fluid mb-3'
  //             />
  //             <p style={{ color: 'black' }}>
  //               Address :Shiv Paradise, Near Heaven Bell School, Near Marathon
  //               Nagari, Yadav Nagar, Shirgaon, Badlapur, Maharashtra.
  //             </p>
  //           </div>
  //           <div className='col-md-4 m-auto'>
  //             <img
  //               src={require('../../Assets/JPU-Logo.png')}
  //               alt=''
  //               width='250px'
  //               className='img-fluid mb-3'
  //             />
  //             <p style={{ color: 'black' }}>
  //               Address :Shiv Corporation, Ground floor, Chandan Apt, Katrap
  //               Road, Badlapur East.
  //               <p>Email: jpugroup1986@gmail.com</p>
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className='container '>
  //       <div className='row'>
  //         <div className='col-md-6 mb-3'>
  //           <div className='Enquiry pb-3 pt-3 bg-white'>
  //             <h2 className='header-style fs-3 c-form'>Contact Form</h2>
  //             <div className='enquiry-form'>
  //               <form id='contactForm' ref={form} onSubmit={handleSubmit}>
  //                 <div className='form-group mb-1 text-light'>
  //                   <label htmlFor='fname'> Full Name</label>
  //                   <input
  //                     type='text'
  //                     className='form-control'
  //                     id='fname'
  //                     name='from_name'
  //                     aria-describedby='nameHelp'
  //                     placeholder='Enter Your Full  Name'
  //                   />
  //                   {/* <small className='text-danger font-weight-bold' id='nameError'>
  //                 Please enter your Full name
  //               </small> */}
  //                 </div>
  //                 <div className='form-group mb-1'>
  //                   <label htmlFor='email'> Email</label>
  //                   <input
  //                     type='text'
  //                     className='form-control'
  //                     id='email'
  //                     name='from_email'
  //                     aria-describedby='emailHelp'
  //                     placeholder='Enter Your Email Address'
  //                   />
  //                   {/* <small className='text-danger font-weight-bold' id='emailError'>
  //                 Please Enter Your Valid Email
  //               </small> */}
  //                 </div>
  //                 <div className='form-group mb-1'>
  //                   <label htmlFor='mobile'> Mobile No</label>
  //                   <input
  //                     type='number'
  //                     className='form-control'
  //                     id='mobile'
  //                     name='from_mobile'
  //                     aria-describedby='mobileHelp'
  //                     placeholder='Enter Mobile No'
  //                   />
  //                   {/* <small
  //                 className='text-danger font-weight-bold'
  //                 id='mobileError'></small> */}
  //                 </div>
  //                 <div className='form-group mb-1'>
  //                   <label htmlFor='Description'>Message</label>
  //                   <textarea
  //                     className='form-control'
  //                     id='description'
  //                     name='message'
  //                     rows={3}
  //                     placeholder='Enter Your Message'></textarea>
  //                 </div>
  //                 <button
  //                   type='submit'
  //                   id='submitBtn'
  //                   className='btn btn-primary mt-3'
  //                   style={{ width: '100%' }}
  //                   // onClick={() => validateSubmitForm}
  //                 >
  //                   Submit
  //                 </button>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //         <div className='col-md-6 m-auto'>
  //           <div className='border border-primary'>
  //             <iframe
  //               title='map'
  //               src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.90930819408!2d73.228344814214!3d19.155446754449834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ed42720c030f%3A0x5685d6da23c7c5fd!2sShiv%20Paradise!5e0!3m2!1sen!2sin!4v1673603511280!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  //               width='100%'
  //               height='350px'></iframe>
  //             {/* <iframe
  //               title='map'
  //               src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.1608105179728!2d73.23063772915908!3d19.167087565950762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be792d50bd7649f%3A0x52c2a1ac5fbba378!2sJpu%20Group!5e0!3m2!1sen!2sin!4v1674720813544!5m2!1sen!2sin" width="600" height="450" style="border:1;"
  //        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  //               width='100%'
  //               height='350px'></iframe> */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Contact;
