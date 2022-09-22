import React from 'react';
import Navbar from './components/Navbar';
import usePersistState from './hooks/usePersistState';
import { UserContext } from './contexts/userContext';
import Placeholder from './components/Placeholder';

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
