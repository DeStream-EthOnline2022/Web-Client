import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import usePersistState from './hooks/usePersistState';
import { UserContext } from './contexts/userContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { ethers } from 'ethers';
import NavigationRoutes from './components/NavigationRoutes';
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
  const [isValidChain, setIsValidChain] = useState<boolean>(false);
  const [accountChanged, setAccountChanged] = useState<number>(0);

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
      console.log('handling chain change...')
      if (chainId === '0x13881') {
        setIsValidChain(true);
      } else {
        setIsValidChain(false);
      }
    }

    const handleAccChange = (accounts: any) => {
      console.log('handling account change...')
      const address = ethers.utils.getAddress(accounts[0]);
      setUser({
        address,
        isMember: false
      });
      setAccountChanged(prev => prev + 1);
    }

    let ethProvider: MetaMaskInpageProvider;
    if (window.ethereum) {
      ethProvider = (window.ethereum as unknown as MetaMaskInpageProvider);
      ethProvider.on('chainChanged', handleChainChange);
      ethProvider.on('accountsChanged', handleAccChange);
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
          <NavigationRoutes accountChanged={accountChanged} />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
