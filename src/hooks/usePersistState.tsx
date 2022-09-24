import { useState, useEffect } from 'react';
import browserStorage from 'store';

export default (storageKey: string, initialState: any) => {
  const [state, setInternalState] = useState(initialState);

  useEffect(() => {
    const storageInBrowser = browserStorage.get(storageKey);
    console.log(storageInBrowser)
    if (storageInBrowser) {
      setInternalState(storageInBrowser);
    }
  }, []);

  const setState = (newState: any) => {
    browserStorage.set(storageKey, newState);
    setInternalState(newState);
  };

  return [state, setState];
}
