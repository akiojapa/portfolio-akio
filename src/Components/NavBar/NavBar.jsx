import React from 'react';
import './NavBar.css'

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import {IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp, IoMail, IoLogoGithub } from 'react-icons/io5'

import { HashLink } from 'react-router-hash-link'

import {
  BrowserRouter as Router
} from "react-router-dom"

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.instagram.com/akioandrei/"><IoLogoInstagram className='image' /></a>
                <a href="https://www.linkedin.com/in/akio-matera-3a483b209/"><IoLogoLinkedin className='image' /></a>
                <a href="https://github.com/akiojapa"><IoLogoGithub className='image' /></a>
                <a href="mailto:akioandreimat@gmail.com"><IoMail className='image' /></a>
              </div>
              <a href='portfolio-akio/Curriculum_AkioMatera' download><button className="vvd">Curriculum</button></a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>

  )
}

export default NavBar;
