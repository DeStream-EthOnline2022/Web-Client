import React, { useState } from 'react';
import Placeholder from './Placeholder';
import PurchaseField from './PurchaseField';
import { useNavigate } from 'react-router-dom';

function Home() {

  const [shouldPurchase, setShouldPurchase] = useState<boolean>(false);

  return (
    <div className='home-container'>
      {shouldPurchase ?
        <PurchaseField setShouldPurchase={setShouldPurchase} />
        :
        <Placeholder setShouldPurchase={setShouldPurchase} />
      }
      <div className='radial-gradient'></div>
    </div>
  );
}

export default Home;
