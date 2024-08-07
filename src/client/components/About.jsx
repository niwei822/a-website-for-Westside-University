import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
const About = () => {
  return (
    <div className='main'>
      <Header />
      <div className='sub-nav'>
        <Link to='/about/history' className='sub-links'>History</Link>
        <Link to='/about/contact' className='sub-links'>Contact</Link>
      </div>
        <Outlet />
      </div>
  );
};

export default About;
