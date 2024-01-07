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
              src='https://www.google.com/maps/d/embed?mid=1AygFuF3mhEK2TGCulRQGbWbvv_UoECQ&ehbc=2E312F'
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
        <h2>Nearby Hotels</h2>
      </div>
      <div className='anchor' id='Stall'></div>
      <div className='Stall container'>
        <h2>Stall Details</h2>
      </div>
    </section>
  );
};

export default Logistics;
