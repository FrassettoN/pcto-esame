import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <h1 className='logo'>
      <NavLink to='/'>PCTO</NavLink>
    </h1>
  );
};

export default Logo;
