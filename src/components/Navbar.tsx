import React, { useState } from 'react';
import { RightArrow } from '../utils/Svgs';

function Navbar() {

  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <nav className="nav-container">
      <div className="nav-content flex-space-between">
        <h1 className='nav-content-header'>DeStream</h1>
        <div className='nav-content-tab-group flex-space-between'>
          <div className='nav-content-tab'>Home</div>
          <div className='nav-content-tab'>Stream</div>
          <div className='nav-content-tab disabled'>Statistics</div>
        </div>
        <button
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className='nav-content-btn flex-space-between'
        >
          Connect Wallet
          <RightArrow isHover={isHover} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;