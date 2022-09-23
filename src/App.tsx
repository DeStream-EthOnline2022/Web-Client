import React, { useState } from 'react';
import Navbar from './components/Navbar';
import usePersistState from './hooks/usePersistState';
import { UserContext } from './contexts/userContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { ethers } from 'ethers';
import AnimatedRoutes from './components/AnimatedRoutes';

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
      <Router>
        <div className="app-container">
          <Navbar />
          <AnimatedRoutes />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
