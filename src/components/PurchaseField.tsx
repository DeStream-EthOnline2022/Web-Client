import React, { useState } from 'react';
import Placeholder from './Placeholder';
import globe from '../assets/images/globe.jpg';
import { Matic } from '../utils/Svgs';
import { motion } from 'framer-motion';
import { ethers } from 'ethers';
import chains from '../utils/chains.json';
import ERC721_ABI from '../abi/erc721.json';
import CircularProgress from '@mui/material/CircularProgress';

function PurchaseField(props: any) {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  type ExternalProvider = ethers.providers.ExternalProvider;

  const purchaseNft = async () => {
    console.log('purchase nft...');
    try {
      if (window.ethereum) {
        setIsLoading(true);
        const provider = new ethers.providers.Web3Provider((window.ethereum as ExternalProvider));
        const signer = provider.getSigner();
        const nft = new ethers.Contract(chains[80001].contract, ERC721_ABI, provider);
        const tx = await nft.connect(signer).claimToken({ value: ethers.utils.parseEther('0.1') });
        const txReceipt = await tx.wait();
        console.log(txReceipt);
        // props.navigation.navigate('Livestream');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='purchasefield-container flex-center'>
      <h2 className='purchasefield-header'>Purchase NFT Membership</h2>
      <div className='purchasefields'>
        <div className='thead flex-space-between'>
          <div className='theader'>Item</div>
          <div className='theader'>Total</div>
        </div>
        <div className='tbody flex-space-between'>
          <div className='purchase-item flex-space-between'>
            <img src={globe} alt='' className='img-globe' />
            <div className='nft-info'>
              <div className='nft-name'>DeStream Membership</div>
              <div className='nft-desc disabled'>Quantity: 1</div>
            </div>
          </div>
          <div className='purchase-price'>
            <div className='nft-tkn-group flex-center'>
              <Matic />
              <div className='nft-tkn-price'>0.1</div>
            </div>
          </div>
        </div>
      </div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => purchaseNft()}
        className='purchase-btn flex-center'
      >
        {isLoading ?
          <CircularProgress color='inherit' size='1.5rem' /> :
          'Complete Purchase'
        }
      </motion.button>
    </div>
  );
}

export default PurchaseField;