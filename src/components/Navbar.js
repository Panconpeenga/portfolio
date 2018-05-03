import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='tc left pa2'>
      <nav className='top-2 pt3 ph2 br2 bg-light-gray shadow-2'>
        <div className='tc pb3'>
          <a className='link dim gray f6 f5-ns dib mr3' href='#home' title='Home'>Home</a>
          <a className='link dim gray f6 f5-ns dib mr3' href='#about' title='About'>About</a>
          <a className='link dim gray f6 f5-ns dib' href='#contact' title='Contact'>Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
