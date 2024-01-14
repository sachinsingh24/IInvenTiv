/** @format */

import React from 'react';
import './Program_Guide.css';
import Card from 'react-bootstrap/Card';
import { affordable_healthcare, agriculture_food_processing, industry, defence_space, susutainable_technology,
  affordable_healthcare_members, agriculture_food_processing_members, industry_members, defence_space_invitees, susutainable_technology_members } from './program_data';
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
            <h4>Affordable Healthcare :</h4>
            {/* <ol>
              <li>Mr. Rajaneesh kini, CTO, Cyient Ltd</li>
              <li>B. Ravi, Professor, NITK</li>
              <li>Prof. Suman Chakraborty, Professor, IIT Kgp</li>
              <li>
                Prashant Garg, Executive Chair, Paul Dubord Chair of Cornea, L V
                Prasad Eye Institute
              </li>
            </ol> */}
            {/* Card of Affordable healthcare */}
            <div className='row justify-content-center'>
              {affordable_healthcare.map((aff: any) => (
                <div
                  className='col-md-2 col-lg-3 col-md-5 col-sm-12 d-flex justify-content-center my-3'
                  key={aff.id}>
                  <Card
                    style={{ width: '18rem', backgroundColor: 'transparent' }}
                    className='card_all_members'>
                    <h5
                      className='card_heading'
                      style={{ padding: '10px 0px', textAlign: 'center' }}>
                      {aff.title}
                    </h5>
                    <Card.Img variant="top" style={{ height: '200px' }} src={aff.image} alt="image" />
                    <Card.Body
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '0 0 10px 10px',
                      }}>
                      <Card.Title style={{ color: '#000' }}>{aff.name}</Card.Title>
                      <Card.Text style={{ color: '#000' }}>
                        {aff.affiliations}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
            <div className='row justify-content-center'>
              {affordable_healthcare_members.map((aff_mem: any) => (
                <div
                  className='col-md-2 col-lg-3 col-md-5 col-sm-12 d-flex justify-content-center my-3'
                  key={aff_mem.id}>
                  <Card
                    style={{ width: '18rem', backgroundColor: 'transparent' }}
                    className='card_all_members'>
                    <h5
                      className='card_heading'
                      style={{ padding: '10px 0px', textAlign: 'center' }}>
                      {aff_mem.title}
                    </h5>
                    <Card.Img variant="top" style={{ height: '200px' }} src={aff_mem.image} alt="image" />
                    <Card.Body
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '0 0 10px 10px',
                      }}>
                      <Card.Title style={{ color: '#000' }}>{aff_mem.name}</Card.Title>
                      <Card.Text style={{ color: '#000' }}>
                        {aff_mem.affiliations}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
            
            <h4>Agriculture & Food Processing :</h4>
            {/* <ol>
              <li>Dr. Sridevi Annapurna Singh, Director, CFTRI</li>
              <li>Prof. V. Palanimuthu, Director, NIFTEM</li>
              <li>
                Dr. Gururaj Chalageri, Principal Scientist BRC, Himalaya
                Wellness Company
              </li>
              <li>Mr. Rajasekhar, Chief Operating Officer, CSA</li>
            </ol> */}
            {/* Card of Agriculture & Food Processing: */}
            <div className='row justify-content-center'>
              {agriculture_food_processing.map((agr: any) => (
                <div
                  className='col-md-2 col-lg-3 col-md-5 col-sm-12 d-flex justify-content-center my-3'
                  key={agr.id}>
                  <Card
                    style={{ width: '18rem', backgroundColor: 'transparent' }}
                    className='card_all_members'>
                    <h5
                      className='card_heading'
                      style={{ padding: '10px 0px', textAlign: 'center' }}>
                      {agr.title}
                    </h5>
                    <Card.Img variant="top" style={{ height: '200px' }} src={agr.image} alt="image" />
                    <Card.Body
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '0 0 10px 10px',
                      }}>
                      <Card.Title style={{ color: '#000' }}>{agr.name}</Card.Title>
                      <Card.Text style={{ color: '#000' }}>
                        {agr.affiliations}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
            <div className='row justify-content-center'>
              {agriculture_food_processing_members.map((agr_mem: any) => (
                <div
                  className='col-md-2 col-lg-3 col-md-5 col-sm-12 d-flex justify-content-center my-3'
                  key={agr_mem.id}>
                  <Card
                    style={{ width: '18rem', backgroundColor: 'transparent' }}
                    className='card_all_members'>
                    <h5
                      className='card_heading'
                      style={{ padding: '10px 0px', textAlign: 'center' }}>
                      {agr_mem.title}
                    </h5>
                    <Card.Img variant="top" style={{ height: '200px' }} src={agr_mem.image} alt="image" />
                    <Card.Body
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '0 0 10px 10px',
                      }}>
                      <Card.Title style={{ color: '#000' }}>{agr_mem.name}</Card.Title>
                      <Card.Text style={{ color: '#000' }}>
                        {agr_mem.affiliations}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>

            <h4>Defense & Space : </h4>
            {/* <ol>
              <li></li>
            </ol> */}
            {/* Card of Defense & Space: */}
            <div className='row justify-content-center'>
              {defence_space.map((def: any) => (
                <div
                  className='col-md-2 col-lg-3 col-md-5 col-sm-12 d-flex justify-content-center my-3'
                  key={def.id}>
                  <Card
                    style={{ width: '18rem', backgroundColor: 'transparent' }}
                    className='card_all_members'>
                    <h5
                      className='card_heading'
                      style={{ padding: '10px 0px', textAlign: 'center' }}>
                      {def.title}
                    </h5>
                    <Card.Img variant="top" style={{ height: '200px' }} src={def.image} alt="image" />
                    <Card.Body
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '0 0 10px 10px',
                      }}>
                      <Card.Title style={{ color: '#000' }}>{def.name}</Card.Title>
                      <Card.Text style={{ color: '#000' }}>
                        {def.affiliations}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
            <div className='row justify-content-center'>
              {defence_space_invitees.map((def_inv: any) => (
                <div
                  className='col-md-2 col-lg-3 col-md-5 col-sm-12 d-flex justify-content-center my-3'
                  key={def_inv.id}>
                  <Card
                    style={{ width: '18rem', backgroundColor: 'transparent' }}
                    className='card_all_members'>
                    <h5
                      className='card_heading'
                      style={{ padding: '10px 0px', textAlign: 'center' }}>
                      {def_inv.title}
                    </h5>
                    <Card.Img variant="top" style={{ height: '200px' }} src={def_inv.image} alt="image" />
                    <Card.Body
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '0 0 10px 10px',
                      }}>
                      <Card.Title style={{ color: '#000' }}>{def_inv.name}</Card.Title>
                      <Card.Text style={{ color: '#000' }}>
                        {def_inv.affiliations}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>

            <h4>Industry 4.0: </h4>
            {/* <ol>
              <li></li>
            </ol> */}
            {/* Card of Industry 4.0: */}
            <div className='row justify-content-center'>
              {industry.map((ind: any) => (
                <div
                  className='col-md-2 col-lg-3 col-md-5 col-sm-12 d-flex justify-content-center my-3'
                  key={ind.id}>
                  <Card
                    style={{ width: '18rem', backgroundColor: 'transparent' }}
                    className='card_all_members'>
                    <h5
                      className='card_heading'
                      style={{ padding: '10px 0px', textAlign: 'center' }}>
                      {ind.title}
                    </h5>
                    <Card.Img variant="top" style={{ height: '200px' }} src={ind.image} alt="image" />
                    <Card.Body
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '0 0 10px 10px',
                      }}>
                      <Card.Title style={{ color: '#000' }}>{ind.name}</Card.Title>
                      <Card.Text style={{ color: '#000' }}>
                        {ind.affiliations}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
            <div className='row justify-content-center'>
              {industry_members.map((ind_mem: any) => (
                <div
                  className='col-md-2 col-lg-3 col-md-5 col-sm-12 d-flex justify-content-center my-3'
                  key={ind_mem.id}>
                  <Card
                    style={{ width: '18rem', backgroundColor: 'transparent' }}
                    className='card_all_members'>
                    <h5
                      className='card_heading'
                      style={{ padding: '10px 0px', textAlign: 'center' }}>
                      {ind_mem.title}
                    </h5>
                    <Card.Img variant="top" style={{ height: '200px' }} src={ind_mem.image} alt="image" />
                    <Card.Body
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '0 0 10px 10px',
                      }}>
                      <Card.Title style={{ color: '#000' }}>{ind_mem.name}</Card.Title>
                      <Card.Text style={{ color: '#000' }}>
                        {ind_mem.affiliations}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>

            <h4>Sustainable Technologies: </h4>
            {/* <ol>
              <li></li>
            </ol> */}
            {/* Card of Sustainable Technologies: */}
            <div className='row justify-content-center'>
              {susutainable_technology.map((sust: any) => (
                <div
                  className='col-md-2 col-lg-3 col-md-5 col-sm-12 d-flex justify-content-center my-3'
                  key={sust.id}>
                  <Card
                    style={{ width: '18rem', backgroundColor: 'transparent' }}
                    className='card_all_members'>
                    <h5
                      className='card_heading'
                      style={{ padding: '10px 0px', textAlign: 'center' }}>
                      {sust.title}
                    </h5>
                    <Card.Img variant="top" style={{ height: '200px' }} src={sust.image} alt="image" />
                    <Card.Body
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '0 0 10px 10px',
                      }}>
                      <Card.Title style={{ color: '#000' }}>{sust.name}</Card.Title>
                      <Card.Text style={{ color: '#000' }}>
                        {sust.affiliations}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
            <div className='row justify-content-center'>
              {susutainable_technology_members.map((sust_mem: any) => (
                <div
                  className='col-md-2 col-lg-3 col-md-5 col-sm-12 d-flex justify-content-center my-3'
                  key={sust_mem.id}>
                  <Card
                    style={{ width: '18rem', backgroundColor: 'transparent' }}
                    className='card_all_members'>
                    <h5
                      className='card_heading'
                      style={{ padding: '10px 0px', textAlign: 'center' }}>
                      {sust_mem.title}
                    </h5>
                    <Card.Img variant="top" style={{ height: '200px' }} src={sust_mem.image} alt="image" />
                    <Card.Body
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '0 0 10px 10px',
                      }}>
                      <Card.Title style={{ color: '#000' }}>{sust_mem.name}</Card.Title>
                      <Card.Text style={{ color: '#000' }}>
                        {sust_mem.affiliations}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>

          </div>
        </div>
        <div className='anchor' id='Layout'></div>
        <div className='layout container'>
          <h2>Layout of Venue</h2>
          <span>
            Download:
            <a
              href={require('../../Assets1/IInvenTiv-2024 Layout Map.pdf')}
              download={'IInvenTive-2024 Technical program'}
              target='_blank'
              rel='noreferrer'>
              {' '}
              <button
                type='button'
                className='btn btn-info btn-md'
                style={{
                  fontWeight: '600',
                  backgroundColor: 'rgb(21, 68, 137)',
                  border: '1px rgb(21, 68, 137)',
                  color: '#fff',
                  height:'50px',
                  fontSize:"20px",
                  marginLeft:"15px"
                }}>
                IInvenTiv Event Layout
              </button>
            </a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Program_Guide;
