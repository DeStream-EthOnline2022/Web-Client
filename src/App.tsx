import React, { useState } from 'react';
import Navbar from './components/Navbar';
import usePersistState from './hooks/usePersistState';
import { UserContext } from './contexts/userContext';
import { ethers } from 'ethers';
import Home from './components/Home';

declare global {
  interface Window {
    ethereum?: ethers.providers.ExternalProvider
  }
}

function App() {

  // const [user, setUser] = usePersistState('user', { address: '' });
  const [user, setUser] = useState({ address: '' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app-container">
        <Navbar />
        <Home />
      </div>
    </UserContext.Provider>
  );
}

export default App;
