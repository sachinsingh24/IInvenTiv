/** @format */

import React from 'react';
import './Logistics.css';
const Logistics = () => {
  return (
    <section className='logistic-section'>
      <div className='anchor' id='reach'></div>
      <div className='how-to-reach container'>
        <h2>How to Reach IIT Hyderabad</h2>
        <div className='reach'>
          <div className='map-loaction'>
            <h4>IITH HYDERABAD MAP LOCATION</h4>
            <iframe
              title='IITH HYDERABAD MAP'
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15213.144684492989!2d78.11695302065431!3d17.589140677589807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf14c69772b9d%3A0xd602d0764305502c!2sIndian%20Institute%20of%20Technology%20(IIT)%20Hyderabad%20Main%20Entrance!5e0!3m2!1sen!2sin!4v1704650081952!5m2!1sen!2sin'
              width='100%'
              height='400px'
              style={{ borderRadius: '15px' }}></iframe>
          </div>
          <div className='other-ways'>
            <div className='row justify-content-center'>
              <div className='col-md-6 my-2 px-2'>
                <div className='card-layout'>
                  <h5>From Airport (64km)</h5>
                  <ul>
                    <li>Get on ORR in Gandiguda from Airport Approach Road</li>
                    <li>
                      Follow ORR to Muthangi, Hyderabad. Take exit 3 from ORR
                    </li>
                    <li>
                      Drive to Mumbai Hwy/NH 9 for 15 km, you will find the sign
                      board of IITH on Right side
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6 my-2 px-2'>
                <div className='card-layout'>
                  <h5>From Mahatma Gandhi Bus Station (54km)</h5>
                  <ul>
                    <li>Head north towards Mumbai Hwy/NH 65</li>
                    <li>Get Via Kukatpally, Patancheruvu</li>
                    <li>Follow ORR to Mumbai Hwy/NH 65</li>
                    <li>Merge onto ORR</li>
                    <li>
                      Take exit towards Mumbai/NH65Take exit towards Mumbai/NH65
                    </li>
                    <li>
                      Drive to Mumbai Hwy/NH 65 for 15 km, you will find the
                      sign board of IITH on Right side
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6 my-2 px-2'>
                <div className='card-layout'>
                  <h5>From Secunderabad Railway Station (50km)</h5>
                  <ul>
                    <li>Take SD Road to Mahatma Gandhi Rd/NH 7 in Hyderabad</li>
                    <li>Follow NH 7 to Old Airport Rd in New Bowenpally</li>
                    <li>Continue on Old Airport Rd to Bhavani Nagar</li>
                    <li>Drive to Mumbai Hwy/NH 65</li>
                    <li>
                      Continue to drive on Mumbai Hwy/NH 65, you will find the
                      sign board of IITH on Right side
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6 my-2 px-2'>
                <div className='card-layout'>
                  <h5>From Hitech City (38km)</h5>
                  <ul>
                    <li>
                      Take Gachibowli – Miyapur Rd to NH65 in Hafeezpet 19 min
                      (6.9 km)
                    </li>
                    <li>Drive to NH65 in Khandi</li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6 my-2 px-2'>
                <div className='card-layout'>
                  <h5>Metro Route</h5>
                  <ul>
                    <li>
                      Reach the Secunderabad-East Metro station which is about
                      600 mtrs from the Secunderabad Railway station.
                    </li>
                    <li>
                      Take a ticket to Miyapur Station. You need to change
                      metros to reach Miyapur Station.
                    </li>
                    <li>Board a metro and get down in Ameerpet Station.</li>
                    <li>Board a metro towards Miyapur Station.</li>
                    <li>
                      Take a bus from Miyapur Bus-stop to Patancheru Bus
                      Station.
                    </li>
                    <li>
                      Take a bus to Sangareddy Town and you will find the sign
                      board of IITH on Right side.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6 my-2 px-2'>
                <div className='card-layout'>
                  <h5>MMTS Route</h5>
                  <ul>
                    <li>
                      Take an MMTS from Secunderabad Railway Station to
                      Lingampally Railway Station.
                    </li>
                    <li>
                      Take a bus from Lingampally Railway Station to Lingampally
                      Bus stand.
                    </li>
                    <li>Take a bus to Patancheru Bus stand.</li>
                    <li>
                      Take a bus to Sangareddy Town and you will find the sign
                      board of IITH on Right side.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h3>Important Contacts</h3>
          <ul>
            <li>Guest House Coordinator: </li>
            <li>Student Hostel Coordinator:</li>
            <li>Security:</li>
          </ul>
          {/*           <h4>Transportation</h4>
          <span>
            Transportation will be provided for all the participants on January
            19, 2024 from Airport/Railway Stations/Miyapur Metro Station
          </span> */}
        </div>
      </div>
      <div className='anchor' id='hotels'></div>
      <div className='Nearby container'>
        <h2 className='mb-4'>Nearby Hotels</h2>
        <div className='hotels mb-4'>
          <h4>1.Hotel Lemon Tree, Gachibowli</h4>
          <span>
            <h6>Details:</h6>
            <p>
              <strong>Distance from IIT Hyderabad:</strong> 38 kms
              <br />
              <strong>Time:</strong> 50 minutes
              <br />
            </p>
          </span>
          <span>
            <h6>Tariff:</h6>
            <p>
              <strong>Superior Room:</strong> ₹6000/₹7000 (Single/double
              occupancy) + Taxes
              <br />
              <strong>Deluxe Room:</strong> ₹7000/₹8000 (Single/double
              occupancy) + Taxes
              <br />
            </p>
          </span>
          <span>
            <h6>Room Rates Include:</h6>
            <ul>
              <li>Buffet Breakfast at Citrus Café (Coffee shop)</li>
              <li>Complimentary WIFI for up to 2 devices per person</li>
              <li>Unlimited internet usage at the business center</li>
              <li>Usage of Fitness Center and swimming pool</li>
            </ul>
          </span>
          <span>
            <h6>Contact Person details:</h6>
            <p>
              <strong>Uday Chandra</strong>
              <br />
              Associate Director of Sales
              <br />
              Lemon Tree Hotel Gachibowli
              <br />
              Lane Behind ICICI Bank, Opposite Q city
              <br />
              Survey No 115/1, Financial District, Nanakramguda, Hyderabad
              500032
              <br />
              T: +91 40 44141414 | M: +91 8008200189
              <br />
              Website:{' '}
              <a
                href='http://www.lemontreehotels.com'
                target='_blank'
                rel='noreferrer'>
                www.lemontreehotels.com
              </a>{' '}
              |{' '}
              <a
                href='http://www.aurikahotels.com'
                target='_blank'
                rel='noreferrer'>
                www.aurikahotels.com
              </a>{' '}
              |{' '}
              <a
                href='http://www.keyshotels.com'
                target='_blank'
                rel='noreferrer'>
                www.keyshotels.com
              </a>
              <br />
              For further information call: +91 9911 701 701
            </p>
          </span>

        </div>
        <div className='hotels mb-4'>
        <h4>
            2.Redla's Inn (
            <a href='https://redlas.in' target='_blank' rel='noreferrer'>
              redlas.in
            </a>
            ){' '}
          </h4>
          <span>
            <h6>Details:</h6>
            <p>
              <strong>Distance from IIT Hyderabad:</strong> 8 kms
              <br />
              <strong>Time:</strong> 15 minutes
              <br />
            </p>
          </span>
          <span>
            <h6>Tariff:</h6>
            <p>
              <strong>A/C Standard Rooms:</strong> : 2250/2950 (Single/Double
              Occupancy) + Taxes
              <br />
            </p>
          </span>
          <h6>The above rate includes the breakfast</h6>
          <span>
            <p>
              <strong>Contact No.: </strong>7893173814
              <br />
              <strong>Email: </strong>
              <a
                href='mailto:bookings@redlas.in'
                target='_blank'
                rel='noreferrer'>
                bookings@redlas.in
              </a>
            </p>
          </span>
        </div>
      </div>
      <div className='anchor' id='Stall'></div>
      <div className='Stall container'>
        <h2>Stall Details</h2>
      </div>
    </section>
  );
};

export default Logistics;
