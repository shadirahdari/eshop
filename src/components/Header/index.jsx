import React from 'react';
import logo from '../../assets/svg/logo.svg';

function Header() {
  return (
    <header>
      <div className="px-5 lg:px-12 py-4 w-full">
        <img src={logo} alt="Logo" loading="lazy" />
      </div>
    </header>
  );
}

export default Header;
Header.propTypes = {};
