import React, { useState, useEffect, useContext } from 'react';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { UserContext } from '../contexts/userContext';
import Placeholder from './Placeholder';
import PurchaseField from './PurchaseField';

function Home() {

  const userCtx = useContext(UserContext);

  const [shouldPurchase, setShouldPurchase] = useState<boolean>(false);

  useEffect(() => {
    const handleAccChange = (accounts: any) => {
      userCtx?.setUser({
        ...userCtx?.user,
        address: accounts[0]
      });
      setShouldPurchase(false);
      console.log('handling account change...')
    }

    let ethProvider: MetaMaskInpageProvider;
    if (window.ethereum) {
      ethProvider = (window.ethereum as unknown  as MetaMaskInpageProvider);
      ethProvider.on('accountsChanged', handleAccChange);
    }

    return () => {
      if (ethProvider) {
        ethProvider.removeAllListeners();
      }
    }
  }, []);

  return (
    <div className='home-container'>
      {shouldPurchase ? <PurchaseField /> : <Placeholder setShouldPurchase={setShouldPurchase} />}
      <div className='radial-gradient'></div>
    </div>
  );
}

export default Home;
