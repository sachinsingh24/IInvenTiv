/** @format */

import React, { useState, useEffect } from "react";
// import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Carousel1 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { home_carousel } from "./data";
// import home_banner from '../../Assets/home banner_image.svg';
// import { Link } from "react-router-dom";
import { members } from "../../membersData/members";

const Home = () => {
  const [value, setValue] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
  });

  const [fade, setFade] = useState("d-none");
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 100) {
      setValue({
        first: 37,
        second: 35,
        third: 4.7,
        fourth: 1500,
      });
      setFade("fadeInLeft");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section>
      <div className="anchor"  id="home"></div>
      <div className="banner-sec fluid-container " >
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              src={require("../../Assets1/banner/1.jpg")}
              alt=""
              className="desktop-view"
            />
            <img
              src={require("../../Assets1/banner/mob1.jpg")}
              alt=""
              className="mobile-view d-none"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../../Assets1/banner/2.jpg")}
              alt=""
              className="desktop-view"
            />
            <img
              src={require("../../Assets1/banner/mob2.jpg")}
              alt=""
              className="mobile-view d-none"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../../Assets1/banner/3.jpg")}
              alt=""
              className="desktop-view"
            />
            <img
              src={require("../../Assets1/banner/mob3.jpg")}
              alt=""
              className="mobile-view d-none"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="anchor"  id="about"></div>
      <div className="About container">
        <h1 className=" mt-5 head-title">
          About{" "}
          <span style={{ color: "#fff" }}>
            <span style={{ color: "#f9a33f" }}>II</span>nven
            <span style={{ color: "#f9a33f" }}>T</span>iv
          </span>
        </h1>
        <p>
          IInvenTiv is the first-of-its-kind, mega R&D fair, where all IITs,
          NITs, IISERs, IIITs and other top 50 ranked NIRF Institutions in the
          country are coming together to showcase the R&D happening there
        </p>
      </div>
      <div className="anchor"  id="date"></div>
      <div className="funfacts-inner container" >
        <h1 className=" mt-5 head-title">Dates & Venue</h1>

        <div className="row">
          <div className="col-lg-5 col-5 col-sm-5 contain-border">
            <div className={`animated ${fade}`}>
              <div className="single-funfacts">
                <div className="funfacts-style-two">
                  <h3>
                    {/* <Odometer format="d" value={value.first} /> */}
                    <span className="odo-text"> DATES</span>
                  </h3>
                  <p>19-20, January 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-5 col-sm-5 contain-border">
            <div className={`animated ${fade}`}>
              <div className="single-funfacts">
                <div className="funfacts-style-two funfacts-style-P">
                  <h3>
                    {/* <Odometer format="(,ddd).dd" value={value.second} /> */}
                    <span className="odo-text">VENUS</span>
                  </h3>
                  <p className="venue_para">
                    Convention Center, IIT Hyderabad Campus Kandi, Sangareddy,
                    Telangana – 502285
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anchor"  id="Participating"></div>
      <div className="Participating container" >
        <h1 className=" mt-5 head-title">Participating Institutes</h1>
        <Tabs
          defaultActiveKey="IITs"
          transition={false}
          id="noanim-tab-example"
          className="my-3"
        >
          <Tab
            eventKey="IITs"
            title="23 IITs"
            style={{ height: "180px" }}
            className="tabs_iit_para"
          >
            IIT Bhilai, IIT BHU, IIT Bhubaneswar, IIT Bombay, IIT Delhi, IIT
            Dharwad, IIT Gandhinagar, IIT Goa, IIT Guwahati, IIT Hyderabad, IIT
            Indore, IIT ISM Dhanbad, IIT Jammu, IIT Jodhpur, IIT Kanpur, IIT
            Kharagpur, IIT Madras, IIT Mandi, IIT Palakkad, IIT Patna, IIT
            Roorkee, IIT Ropar, IIT Tirupati
          </Tab>
          <Tab
            eventKey="NITs"
            title="31 NITs "
            style={{ height: "180px" }}
            className="tabs_iit_para"
          >
            NIT Agartala, NIT Allahabad, NIT Andhra Pradesh, NIT Arunachal
            Pradesh, NIT Bhopal, NIT Calicut, NIT Delhi, NIT Durgapur, NIT Goa,
            NIT Hamirpur, NIT Jaipur, NIT Jalandhar, NIT Jamshedpur, NIT
            Karnataka Surathkal, NIT Kurukshetra, NIT Manipur, NIT Meghalaya,
            NIT Mizoram, NIT Nagaland, NIT Nagpur, NIT Patna, NIT Puducherry,
            NIT Raipur, NIT Rourkela, NIT Sikkim, NIT Silchar, NIT Srinagar, NIT
            Surat, NIT Tiruchirappalli, NIT Uttarakhand, NIT Warangal
          </Tab>
          <Tab
            eventKey="IISERs"
            title="7 IISERs "
            style={{ height: "180px" }}
            className="tabs_iit_para"
          >
            IISER Berhampur, IISER Bhopal, IISER Kolkata, IISER Mohali, IISER
            Pune, IISER Thiruvananthapuram, IISER Tirupati
          </Tab>
          <Tab
            eventKey="IIITs"
            title="5 IIITs"
            style={{ height: "180px" }}
            className="tabs_iit_para"
          >
            IIIT Allahabad , IIIT Hyderabad, IIITDM Kurnool,IIITDM,
            Kancheepuram, IIITDM Jabalpur
          </Tab>
          <Tab
            eventKey="Other"
            title="Other Top 50 NIRF Engg Institutes "
            style={{ height: "180px" }}
            className="tabs_iit_para"
          >
            Aligarh Muslim University, Amity University, Amrita Vishwa
            Vidyapeetham, Anna University, Birla Institute of Technology &
            Science - Pilani, Chandigarh University, Delhi Technological
            University, ICT Mumbai, IIEST Shibpur, Indian Institute of Space
            Science and Technology, Jadavpur University, Jamia Millia
            Islamia,New Delhi, Kalasalingam Academy of Research and Education,
            Kalinga Institute of Industrial Technology, Koneru Lakshmaiah
            Education Foundation University, Lovely Professional University,
            S.R.M. Institute of Science and Technology, Shanmugha Arts Sci Tech
            & Research Academy, Siksha `O` Anusandhan, Sri Sivasubramaniya Nadar
            College of Engineering, Thapar Institute of Engineering and
            Technology, Vellore Institute of Technology
          </Tab>
        </Tabs>
      </div>
      <div className="anchor"  id="committee"></div>
      <div className="Committee container" >
        <h1 className="mt-5 head-title">Steering Committee</h1>
        <div className="chairman">
          <h5 className="text-center my-4" style={{ color: "#fff" }}>
            CHAIRMAN & CONVENOR
          </h5>
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex justify-content-center my-3">
              <Card style={{ width: "18rem",backgroundColor:"transparent" }} className="card_all_members">
                <h5
                  className="card_heading"
                  style={{ padding: "10px 0px", textAlign: "center" }}
                >
                  Chairman
                </h5>
               
                <Card.Body style={{backgroundColor:"#fff", borderRadius:"0 0 10px 10px"}}>
                  <Card.Title>Dr. B.V.R. Mohan Reddy</Card.Title>
                  <Card.Text style={{ color: "#000" }}>
                    Founding Chairman, Cyient Ltd. Chairman, BoG IIT Hyderabad &
                    IIT Roorkee
                  </Card.Text>
                  {/* <Button variant="primary" className="card_button">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 d-flex justify-content-center my-3">
              <Card style={{ width: "18rem",backgroundColor:"transparent" }} className="card_all_members">
                <h5
                  className="card_heading"
                  style={{ padding: "10px 0px", textAlign: "center" }}
                >
                  Convenor
                </h5>
                
                <Card.Body style={{backgroundColor:"#fff", borderRadius:"0 0 10px 10px"}}>
                  <Card.Title>Prof. B.S. Murty</Card.Title>
                  <Card.Text style={{ color: "#000" }}>
                    Director, IIT Hyd
                  </Card.Text>
                  {/* <Button variant="primary" className="card_button">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="coordinators">
          <h5 className="text-center my-4" style={{ color: "#fff" }}>
            PERMANENT INVITEES/COORDINATORS
          </h5>
          <div className="row justify-content-center">
            <div className="col-md-4 d-flex justify-content-center my-3">
              <Card style={{ width: "18rem",backgroundColor:"transparent" }} className="card_all_members">
                <h5
                  className="card_heading"
                  style={{ padding: "10px 0px", textAlign: "center" }}
                >
                  Coordinator
                </h5>
                
                <Card.Body style={{backgroundColor:"#fff", borderRadius:"0 0 10px 10px"}}>
                  <Card.Title>
                    Prof. Chandra Shekhar Sharma Dean (SRC)
                  </Card.Title>
                  <Card.Text style={{ color: "#000" }}>IIT Hyderabad</Card.Text>
                  {/* <Button variant="primary" className="card_button">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 d-flex justify-content-center my-3">
              <Card style={{ width: "18rem",backgroundColor:"transparent" }} className="card_all_members">
                <h5
                  className="card_heading"
                  style={{ padding: "10px 0px", textAlign: "center" }}
                >
                  Special Invitee
                </h5>
               
                <Card.Body style={{backgroundColor:"#fff", borderRadius:"0 0 10px 10px"}}>
                  <Card.Title>Prof. Upendra V. Bhandarkar </Card.Title>
                  <Card.Text style={{ color: "#000" }}>IIT Bombay</Card.Text>
                  {/* <Button variant="primary" className="card_button">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 d-flex justify-content-center my-3">
              <Card style={{ width: "18rem",backgroundColor:"transparent"  }} className="card_all_members">
                <h5
                  className="card_heading"
                  style={{ padding: "10px 0px", textAlign: "center" }}
                >
                  Coordinator
                </h5>
                
                <Card.Body style={{backgroundColor:"#fff", borderRadius:"0 0 10px 10px"}}>
                  <Card.Title>Prof. S Suryakumar Dean (ITS) </Card.Title>
                  <Card.Text style={{ color: "#000" }}>IIT Hyderabad</Card.Text>
                  {/* <Button variant="primary" className="card_button">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="members">
          <h5 className="text-center my-4" style={{ color: "#fff" }}>
            OTHER MEMBER
          </h5>
          <div className="row justify-content-center">
            {members.map((member: any) => (
              <div
                className="col-md-2 col-lg-3 col-md-5 col-sm-12 d-flex justify-content-center my-3"
                key={member.id}
              >
                <Card style={{ width: "15rem", backgroundColor:"transparent" }} className="card_all_members">
                  <h5
                    className="card_heading"
                    style={{ padding: "10px 0px", textAlign: "center" }}
                  >
                    {member.title}
                  </h5>
                  
                  <Card.Body style={{backgroundColor:"#fff", borderRadius:"0 0 10px 10px"}}>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text style={{ color: "#000" }}>
                      {member.affiliations}
                    </Card.Text>
                    {/* <Button variant="primary" className="card_button">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            ))}

            {/* <div className="col-md-2 d-flex justify-content-center my-3">
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" style={{height: '145px'}} src={require("../../Assets1/person-dummy.jpg")} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ color: "#000" }}>
                  Some quick example 
                </Card.Text>
                // <Button variant="primary" className="card_button">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div> */}
          </div>
        </div>
      </div>
      <div className="anchor"  id="IInvenTiv"></div>
      <div className="IInvenTiv container" >
        <h1 className="mt-5 head-title">
          {" "}
          <span style={{ color: "#fff" }}>
            <span style={{ color: "#f9a33f" }}>II</span>nven
            <span style={{ color: "#f9a33f" }}>T</span>iv
          </span>{" "}
          2022
        </h1>
        <p>
          For the first time, all the 23 IITs of the country have come together
          for a mega Research & Development Fair which was held from October
          14-15, 2022 at the Indian Institute of Technology Delhi premises. The
          inaugural session was graced by{" "}
          <b>
            Hon’ble Union Minister for Education and Skill Development and
            Entrepreneurship Shri Dharmendra Pradhan.
          </b>
        </p>
        <p>
          A Steering Committee headed by Dr. Pawan Goenka, Chairman, BoG IIT
          Madras and Dr. BVR Mohan Reddy, Chairman, BoG IIT Hyderabad and IIT
          Roorkee; was assigned to look after the event. Named <b>IInvenTiv</b>.
        </p>
        <p>
          The R&D Fair was organized in commemoration of the 75th year of
          India’s Independence in line with the <i> Azadi ka Amrit Mahotsav</i>
          initiative. It showcased projects on diverse areas covering climate
          change, sustainability, smart city architecture, rural agriculture,
          affordable healthcare, drone technology, and so on. The objective was
          to promote innovations in line with the Make in India, and Digital
          India initiatives, and seek solutions for better reach and scalability
          of innovations that benefit the masses across regions.
        </p>
        <ul>
          <h4>
            {" "}
            There were ten broad themes identified in focused areas for the
            event:
          </h4>
          <li>Defence and aerospace</li>
          <li>Healthcare (including devices and digital health)</li>
          <li>Environment and Sustainability (including air, water, rivers)</li>
          <li>Clean Energy & Renewables (including Hydrogen and EV)</li>
          <li>Manufacturing (including smart, advanced and industry 4.0)</li>
          <li>AI/ML/Blockchain technologies (including quantum computing)</li>
          <li>Smart Cities & Infrastructure (including smart mobility)</li>
          <li>Communication Technologies (including education and 5G)</li>
          <li>Robotics, Sensors & Actuators</li>
          <li>Semiconductors, Flexible electronics & Nanotechnology</li>
        </ul>
        <p>
          A total of 75 projects by 23 IITs were selected for the event, along
          with 6 showcase projects. Out of the 6 showcase projects, IIT Kanpur
          has lead a presentation on the R&D in drone technology and how diverse
          its utilities have become; IIT Bombay has also lead a presentation on
          the Bahubhaashak project, which enables speech-to-speech translation,
          NPTEL, SWAYAM, MOOCs videos in vernacular languages, in-line with the
          vision of National Education Policy 2020; IIT Madras has lead a
          presentation on 5G Core and allied technologies; IIT Delhi has lead a
          presentation on the R&D in the broader areas of climate change,
          agriculture, rural technologies, sanitation etc;IIT Kharagpur has lead
          a presentation on affordable healthcare devices and technologies; and
          IIT Hyderabad has lead a presentation on the technological innovations
          in the electric vehicle (EV) sector.
        </p>
        <p>
          The selected projects were presented before the audience in designated
          booths during the 2-day mega event. Representatives from Confederation
          of Indian Industry (CII), Federation of Indian Chambers of Commerce &
          Industry (FICCI) and National Association of Software and Service
          Companies (NASSCOM), will be present at the event. The audience also
          included administrators and students from universities and colleges
          from small towns, global IIT alumni, faculties of various CFTIs,
          scientists from DRDO, ISRO, CSIR and ICAR, and so on.
        </p>
        <p>
          The 2-day event held interactive as well as one-to-one sessions among
          the academia and industry representatives. Dr. Pawan Goenka, Chairman,
          BoG IIT Madras; Dr. BVR Mohan Reddy, Chairman, BoG IIT Hyderabad and
          IIT Roorkee; Dr. K. Radhakrishan, Chairman, Standing Committee for IIT
          Council and BoG IIT Kanpur; and all the Directors of the IITs were
          present among the other invitees.
        </p>
      </div>
      
    </section>
  );
};

export default Home;

// document.querySelector(document).ready(function () {
//
// });
