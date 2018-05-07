import React from 'react';
import './Navbar.css'

const Navbar = ({ onRouteChange }) => {
  return (
      <nav className='top-2 pt3 ph2 br2 bg-light-gray shadow-2'>
          <p onClick={() => onRouteChange('home')} className='link dim gray f6 f5-ns dib mr3 pointer'>Home</p>
          <p onClick={() => onRouteChange('projects')} className='link dim gray f6 f5-ns dib mr3 pointer'>Projects</p>
          <p onClick={() => onRouteChange('contact')} className='link dim gray f6 f5-ns dib pointer'>Contact</p>
      </nav>
  );
};

export default Navbar;
