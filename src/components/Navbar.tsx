import React, { useState, useContext } from 'react';
import { MetaMask, RightArrow } from '../utils/Svgs';
import { ethers } from 'ethers';
import { UserContext } from '../contexts/userContext';

function Navbar() {

  const userCtx = useContext(UserContext);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [loadingAcc, setLoadingAcc] = useState<boolean>(false);

  let truncatedAcc: string = '';
  if (userCtx?.user.address) {
    truncatedAcc =
      userCtx?.user.address.slice(0, 5) + '...' + userCtx?.user.address.slice(userCtx?.user.address.length - 4);
  }

  const login = async () => {
    try {
      if (window.ethereum) {
        setLoadingAcc(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        userCtx?.setUser({ address: accounts[0] });
        console.log(accounts);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingAcc(false);
    }
  }

  const Chip = () => {
    return (
      <div className='nav-content-chip flex-space-between'>
        <MetaMask />
        {truncatedAcc}
      </div>
    )
  }

  const Button = () => {
    return (
      <button
        disabled={loadingAcc}
        onClick={() => login()}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`nav-content-btn flex-space-between`}
      >
        Connect Wallet
        <RightArrow isHover={isHover} />
      </button>
    )
  }

  return (
    <nav className="nav-container">
      <div className="nav-content flex-space-between">
        <h1 className='nav-content-header'>DeStream</h1>
        <div className='nav-content-tab-group flex-space-between'>
          <div className='nav-content-tab'>Home</div>
          <div className='nav-content-tab'>Stream</div>
          <div className='nav-content-tab disabled'>Statistics</div>
        </div>
        {userCtx?.user.address ? <Chip /> : <Button />}
      </div>
    </nav>
  );
}

export default Navbar;