import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import usePersistState from './hooks/usePersistState';
import { UserContext, UserProps } from './contexts/userContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { ethers } from 'ethers';
import AnimatedRoutes from './components/AnimatedRoutes';
import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum?: ethers.providers.ExternalProvider
  }
}

function App() {

  const [user, setUser] = usePersistState('user', {
    address: '',
    isMember: false
  });
  const [isValidChain, setIsValidChain] = useState(false);
  // const [user, setUser] = useState<UserProps>({
  //   address: '',
  //   isMember: false
  // });

  const checkChainId = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const { chainId } = await provider.getNetwork();
      if (chainId === 80001) {
        setIsValidChain(true);
      }
    }
  }

  useEffect(() => {
    checkChainId();

    const handleChainChange = (chainId: any) => {
      if (chainId === '0x13881') {
        setIsValidChain(true);
      } else {
        setIsValidChain(false);
      }
    }

    let ethProvider: MetaMaskInpageProvider;
    if (window.ethereum) {
      ethProvider = (window.ethereum as unknown  as MetaMaskInpageProvider);
      ethProvider.on('chainChanged', handleChainChange);
    }

    return () => {
      if (ethProvider) {
        ethProvider.removeAllListeners();
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="app-container">
          <Navbar isValidChain={isValidChain} />
          <AnimatedRoutes />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
