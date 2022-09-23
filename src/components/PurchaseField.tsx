import React, { useEffect, useRef, useState } from 'react';
import globe from '../assets/images/globe.jpg';
import { Matic } from '../utils/Svgs';
import { motion } from 'framer-motion';
import { ethers } from 'ethers';
import chains from '../utils/chains.json';
import ERC721_ABI from '../abi/erc721.json';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';

function PurchaseField(props: any) {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  const img = useRef<HTMLImageElement>(null);

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

  const textHeaderStyles = {
    fontSize: '1.5rem',
    transform: 'scale(1, 1)',
    marginBottom: '0.4em',
  }

  const textDescStyle = {
    fontSize: '1rem',
    transform: 'scale(1, 1)',
  }

  return (
    <motion.div
      className='purchasefield-container flex-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className='purchasefield-header'>Purchase NFT Membership</h2>
      <div className='purchasefields'>
        <div className='thead flex-space-between'>
          <div className='theader'>Item</div>
          <div className='theader'>Total</div>
        </div>
        <div className='tbody flex-space-between'>
          <div className='purchase-item flex-space-between'>
            {/* <img
              src={globe} alt=''
              className='img-globe'
              onLoad={() => setImgLoaded(true)}
              style={{ display: imgLoaded ? 'block' : 'none' }}
            /> */}
            <Skeleton variant='rectangular' animation='wave' width='7.5rem' height='7.5rem' />
            <div className='nft-info'>
              <div className='nft-name'>DeStream Membership</div>
              <div className='nft-desc disabled'>Quantity: 1</div>
            </div>
            <div className='skeleton-texts'>
              <Skeleton variant='text' animation='wave' width='17.5rem' sx={textHeaderStyles} className='skeleton-text-header' />
              <Skeleton variant='text' animation='wave' width='8.5rem' sx={textDescStyle} />
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
          <CircularProgress color='inherit' size='1.5rem' />
          :
          'Complete Purchase'
        }
      </motion.button>
    </motion.div>
  );
}

export default PurchaseField;
