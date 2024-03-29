/** @format */

import { useState, useEffect } from 'react';
import {
  Offcanvas,
  // NavDropdown,
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';
import './nav-tab.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
// import logo from "../../Assets/JPU-Logo.png";
import { Link } from 'react-router-dom';
import {
  home,
  message,
  Showcase,
  ProgramGuide,
  Logistics,
  Outreach,
} from './dropdown_data';

interface ShowState {
  drop1: boolean;
  drop2: boolean;
  drop3: boolean;
  drop4: boolean;
  drop5: boolean;
  drop6: boolean;
  drop7: boolean;
  // ... other items in the state object
}

const Nav_tab = () => {
  const initialState: ShowState = {
    drop1: false,
    drop2: false,
    drop3: false,
    drop4: false,
    drop5: false,
    drop6: false,
    drop7: false,
  };
  const navigate = useNavigate();
  const [show, setShow] = useState<ShowState>(initialState);
  const [isTop, setIsTop] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('1'); // State to manage active link

  const handleNavClick = (eventKey: string) => {
    setActiveLink(eventKey);
    setExpanded(false);
  };

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      setIsTop(scrollTop === 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShowUpdate = (key: keyof ShowState) => {
    setShow((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <>
      <section>
        {['md'].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className={`navBar ${isTop ? 'top' : ''}`}
            // collapseOnSelect
            expanded={expanded} // Assign expanded state to control collapse
            onToggle={() => setExpanded(!expanded)}>
            <Container>
              <Navbar.Brand>
                <Link to='/Home'>
                  <h2 style={{ color: '#154489' }}>
                    <span style={{ color: '#f9a33f' }}>II</span>nven
                    <span style={{ color: '#f9a33f' }}>T</span>iv
                  </h2>
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement='end'>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <h2 style={{ color: '#154489' }}>
                      <span style={{ color: '#f9a33f' }}>II</span>nven
                      <span style={{ color: '#f9a33f' }}>T</span>iv
                    </h2>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body aria-label='Close'>
                  <Nav className='justify-content-end flex-grow-1 pe-2'>
                    <NavDropdown
                      title={<Link to='/Home'>Home</Link>}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      show={show.drop1}
                      onMouseEnter={() => handleShowUpdate('drop1')}
                      onMouseLeave={() => handleShowUpdate('drop1')}
                      onClick={() => handleNavClick('1')}
                      className={activeLink === '1' ? 'active' : ''}>
                      {home.map((item, index) => {
                        return (
                          <NavDropdown.Item
                            key={index}
                            href={`${item.link}`}
                            onClick={() => navigate('/Home/')}>
                            <div className='nav-dropdown'>
                              <div className='general-cloud'>
                                <div className='general-cloud-vps'>
                                  <h6>{item.head}</h6>
                                </div>
                              </div>
                            </div>
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                    <NavDropdown
                      title={<Link to='/Messages'>Messages</Link>}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      show={show.drop2}
                      onMouseEnter={() => handleShowUpdate('drop2')}
                      onMouseLeave={() => handleShowUpdate('drop2')}
                      onClick={() => handleNavClick('2')}
                      className={activeLink === '2' ? 'active' : ''}>
                      {message.map((item, index) => {
                        return (
                          <NavDropdown.Item
                            key={index}
                            href={`${item.link}`}
                            onClick={() => navigate('/Messages/')}>
                            <div className='nav-dropdown'>
                              <div className='general-cloud'>
                                <div className='general-cloud-vps'>
                                  <h6>{item.head}</h6>
                                </div>
                              </div>
                            </div>
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                    <NavDropdown
                      title={<Link to='/R&D_Showcase'>R&D Showcase</Link>}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      show={show.drop3}
                      onMouseEnter={() => handleShowUpdate('drop3')}
                      onMouseLeave={() => handleShowUpdate('drop3')}
                      onClick={() => handleNavClick('3')}
                      className={activeLink === '3' ? 'active' : ''}>
                      {Showcase.map((item, index) => {
                        return (
                          <NavDropdown.Item
                            key={index}
                            href={`${item.link}`}
                            onClick={() => navigate('/R&D_Showcase/')}>
                            <div className='nav-dropdown'>
                              <div className='general-cloud'>
                                <div className='general-cloud-vps'>
                                  <h6>{item.head}</h6>
                                </div>
                              </div>
                            </div>
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                    <NavDropdown
                      title={<Link to='/Program_Guide'>Program Guide</Link>}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      show={show.drop4}
                      onMouseEnter={() => handleShowUpdate('drop4')}
                      onMouseLeave={() => handleShowUpdate('drop4')}
                      onClick={() => {
                        handleNavClick('4');
                        navigate('Program_Guide/');
                      }}
                      className={activeLink === '4' ? 'active' : ''}>
                      {ProgramGuide.map((item, index) => {
                        return (
                          <NavDropdown.Item
                            key={index}
                            href={`${item.link}`}
                            onClick={() => navigate('Program_Guide')}>
                            <div className='nav-dropdown'>
                              <div className='general-cloud'>
                                <div className='general-cloud-vps'>
                                  <h6>{item.head}</h6>
                                </div>
                              </div>
                            </div>
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                    <NavDropdown
                      title={<Link to='/Logistics'>Logistics</Link>}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      show={show.drop5}
                      onMouseEnter={() => handleShowUpdate('drop5')}
                      onMouseLeave={() => handleShowUpdate('drop5')}
                      onClick={() => handleNavClick('5')}
                      className={activeLink === '5' ? 'active' : ''}>
                      {Logistics.map((item, index) => {
                        return (
                          <NavDropdown.Item
                            key={index}
                            href={`${item.link}`}
                            onClick={() => navigate('/Logistics/')}>
                            <div className='nav-dropdown'>
                              <div className='general-cloud'>
                                <div className='general-cloud-vps'>
                                  <h6>{item.head}</h6>
                                </div>
                              </div>
                            </div>
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                    <NavDropdown
                      title={<Link to='/Outreach'>Outreach</Link>}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      show={show.drop6}
                      onMouseEnter={() => handleShowUpdate('drop6')}
                      onMouseLeave={() => handleShowUpdate('drop6')}
                      onClick={() => handleNavClick('6')}
                      className={activeLink === '6' ? 'active' : ''}>
                      {Outreach.map((item, index) => {
                        return (
                          <NavDropdown.Item
                            key={index}
                            href={`${item.link}`}
                            onClick={() => navigate('/Outreach/')}>
                            <div className='nav-dropdown'>
                              <div className='general-cloud'>
                                <div className='general-cloud-vps'>
                                  <h6>{item.head}</h6>
                                </div>
                              </div>
                            </div>
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                    <Nav.Link
                      as={Link}
                      to='/Contact'
                      onClick={() => handleNavClick('7')}
                      className={activeLink === '7' ? 'active' : ''}>
                      Contact Us
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </section>
    </>
  );
};

export default Nav_tab;
