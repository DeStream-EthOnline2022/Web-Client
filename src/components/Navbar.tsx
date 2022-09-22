import React from 'react';

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-content flex-space-between">
        <h1 className='nav-content-header'>DeStream</h1>
        <div className='nav-content-tab-group flex-space-between'>
          <div className='nav-content-tab'>Home</div>
          <div className='nav-content-tab'>Stream</div>
          <div className='nav-content-tab disabled'>Statistics</div>
        </div>
        <div className="nav-content-btn-group">
          <button className='nav-content-btn'>Connect Wallet</button>
          <img />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;