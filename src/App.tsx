import React from 'react';
import Navbar from './components/Navbar';
import usePersistState from './hooks/usePersistState';
import { UserContext } from './contexts/userContext';
import Placeholder from './components/Placeholder';
import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum?: ethers.providers.ExternalProvider
  }
}

function App() {

  const [user, setUser] = usePersistState('user', { address: '' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app-container">
        <Navbar />
        <Placeholder />
      </div>
    </UserContext.Provider>
  );
}

export default App;
