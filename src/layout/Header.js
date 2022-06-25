import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import Logo from '../components/Logo';

const Header = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  let fixHeader = () => (pathname === '/' ? 'fixed' : '');

  return (
    <header className={`header ${fixHeader()}`}>
      <Logo />
      <p className='header__openMenu' onClick={toggleMenu}>
        &#9776;
      </p>
      <div className={`header__menu ${isOpen && 'open'}`}>
        <p className='header__closeMenu' onClick={toggleMenu}>
          &times;
        </p>
        <div onClick={toggleMenu}>
          <nav>
            <NavLink to='fisica'>Fisica</NavLink>
            <NavLink to='joblab'>JOBLAB@Bocconi</NavLink>
            <NavLink to='stampa3D'>Stampa 3D</NavLink>
            <NavLink to='chimica'>Chimica</NavLink>
            <NavLink to='coding/descrizione'>Coding</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
