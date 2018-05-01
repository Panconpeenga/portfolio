import React from 'react';

const Navbar = () => {
  return (
    <nav className='pa3 pa4-ns top-0 abosolute'>
      <div className='tc pb3'>
        <a className='link dim gray f6 f5-ns dib mr3' href='#home' title='Home'>Home</a>
        <a className='link dim gray f6 f5-ns dib mr3' href='#about' title='About'>About</a>
        <a className='link dim gray f6 f5-ns dib' href='#contact' title='Contact'>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
