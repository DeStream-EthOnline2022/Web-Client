import React, { useState } from 'react';
import Placeholder from './Placeholder';
import PurchaseField from './PurchaseField';
import { motion } from 'framer-motion';

function Home() {

  const [shouldPurchase, setShouldPurchase] = useState<boolean>(false);

  return (
    <div className='home-container'>
      {shouldPurchase ? <PurchaseField /> : <Placeholder setShouldPurchase={setShouldPurchase} />}
      <div className='radial-gradient'></div>
    </div>
  );
}

export default Home;
