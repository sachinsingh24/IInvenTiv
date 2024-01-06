/** @format */

import React from 'react';
import './Program_Guide.css';
const Program_Guide = () => {
  return (
    <>
      <section className='program-guide-section'>
        <div className='anchor' id='Schedule'></div>
        <div className='schedule container'>
          <h2>Program Guide</h2>
          <div className='containerSchedule '>
            <h4 className='mb-3'>
              Event Program Schedule with CC layout/Stalls layout/VIP layout
            </h4>
            <div className='wrapper'>
              <h3> Day 1 (January 19, 2024):</h3>
              <ul className='sessions'>
                <li>
                  <div className='time'>09.30-10:30</div>
                  <p>Inauguration</p>
                </li>
                <li>
                  <div className='time'>10:30-11:30 </div>
                  <p>Inauguration of Exhibition & Hi-Tea</p>
                </li>
                <li>
                  <div className='time'>11:30-12:30</div>
                  <p> Panel Discussion (Theme: Affordable Healthcare)</p>
                </li>
                <li>
                  <div className='time'>12:30-14:00</div>
                  <p>Lunch & Networking</p>
                </li>
                <li>
                  <div className='time'>14:00-15:00</div>
                  <p>
                    Panel Discussion 2 (Theme: Agriculture & Food Processing)
                  </p>
                </li>
                <li>
                  <div className='time'>15:00-16:00</div>
                  <p>Panel Discussion 3 (Theme: Defense & Space)</p>
                </li>
                <li>
                  <div className='time'>16.00-16.30</div>
                  <p>Tea/Coffee Break</p>
                </li>
                <li>
                  <div className='time'>16:30-17:30</div>
                  <p>Panel Discussion 4 (Theme: Industry 4.0)</p>
                </li>
                <li>
                  <div className='time'>17:30-18:30</div>
                  <p>Panel Discussion 5 (Theme: Sustainable Technologies)</p>
                </li>
                <li>
                  <div className='time'>19:00-20:00</div>
                  <p>Cultural Program</p>
                </li>
                <li>
                  <div className='time'>20:00-21:30</div>
                  <p>
                    10:30-18:30 Exhibition Time (Exclusively for Industry and
                    R&D Labs Delegates and Other Invited Guests)
                  </p>
                </li>
              </ul>
              <h3 className='mt-5'>Day 2 (January 20, 2024)</h3>
              <ul className='sessions'>
                <li>
                  <div className='time'>10:00-13:00</div>
                  <p>
                    Exhibition Time (Exclusively for Industry and R&D Labs
                    Delegates and Other Invited Guests)
                  </p>
                </li>
                <li>
                  <div className='time'>13:00-14:00</div>
                  <p> Lunch & Networking</p>
                </li>
                <li>
                  <div className='time'>14:00-17:00</div>
                  <p>
                    Exhibition (Open to All Academic institutions Students &
                    Faculty)
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className='containerSchedule2'>
            <div className='timeline-item' date-is='10:00-13:00'>
              <h1>
                Exhibition Time (Exclusively for Industry and R&D Labs Delegates
                and Other Invited Guests)
              </h1>
            </div>

            <div className='timeline-item' date-is='13:00-14:00 '>
              <h1>Lunch & Networking</h1>
            </div>

            <div className='timeline-item' date-is='14:00-17:00'>
              <h1>
                Exhibition (Open to All Academic institutions Students &
                Faculty)
              </h1>
            </div>
          </div> */}
        </div>
        <div className='anchor' id='Panel'></div>
        <div className='panal-discussion container'>
          <h2>Panel Discussion Forums</h2>
          <div className='my-4 discussion'>
            <h4>Affordable Healthcare:</h4>
            <ol>
              <li>Mr. Rajaneesh kini, CTO, Cyient Ltd</li>
              <li>B. Ravi, Professor, NITK</li>
              <li>Prof. Suman Chakraborty, Professor, IIT Kgp</li>
              <li>
                Prashant Garg, Executive Chair, Paul Dubord Chair of Cornea, L V
                Prasad Eye Institute
              </li>
            </ol>
            <h4>Agriculture & Food Processing:</h4>
            <ol>
              <li>Dr. Sridevi Annapurna Singh, Director, CFTRI</li>
              <li>Prof. V. Palanimuthu, Director, NIFTEM</li>
              <li>
                Dr. Gururaj Chalageri, Principal Scientist BRC, Himalaya
                Wellness Company
              </li>
              <li>Mr. Rajasekhar, Chief Operating Officer, CSA</li>
            </ol>
            <h4>Industry 4.0: </h4>
            {/* <ol>
              <li></li>
            </ol> */}
            <h4>Defense & Space: </h4>
            {/* <ol>
              <li></li>
            </ol> */}
            <h4>Sustainable Technologies: </h4>
            {/* <ol>
              <li></li>
            </ol> */}
          </div>
        </div>
        <div className='anchor' id='Layout'></div>
        <div className='layout container'>
          <h2>Layout of Venue</h2>
        </div>
      </section>
    </>
  );
};

export default Program_Guide;
