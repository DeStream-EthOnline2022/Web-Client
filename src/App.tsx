import React from 'react';
import Navbar from './components/Navbar';
import usePersistState from './hooks/usePersistState';
import { UserContext } from './contexts/userContext';

function App() {

  const [user, setUser] = usePersistState('user', { address: '' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app-container">
        <Navbar />
      </div>
    </UserContext.Provider>
  );
}

export default App;
