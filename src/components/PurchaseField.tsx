import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import { Matic } from '../utils/Svgs';
import { motion } from 'framer-motion';
import { ethers } from 'ethers';
import chains from '../utils/chains.json';
import ERC721_ABI from '../abi/erc721.json';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import { UserContext } from '../contexts/userContext';

type PurchaseFieldProps = {
  setShouldPurchase: React.Dispatch<React.SetStateAction<boolean>>
}

function PurchaseField(props: PurchaseFieldProps) {

  const userCtx = useContext(UserContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  type ExternalProvider = ethers.providers.ExternalProvider;

  const navigate = useNavigate();

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
        userCtx?.setUser({
          ...userCtx?.user,
          isMember: true
        });
        navigate('stream');
        props.setShouldPurchase(false);
        console.log(txReceipt);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleImgLoad = () => {
    setTimeout(() => {
      setImgLoaded(true);
    }, 1500);
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

  const textPriceStyle = {
    fontSize: '2.5rem',
    display: imgLoaded ? 'none' : 'block'
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
            <img
              src={logo} alt=''
              className='img-logo'
              onLoad={() => handleImgLoad()}
              style={{ display: imgLoaded ? 'block' : 'none' }}
            />
            <Skeleton
              variant='rectangular'
              animation='wave'
              width='7.5rem'
              height='7.5rem'
              style={{ display: imgLoaded ? 'none' : 'block' }}
            />
            {imgLoaded &&
              <div className='nft-info'>
                <div className='nft-name'>DeStream Membership</div>
                <div className='nft-desc disabled'>Quantity: 1</div>
              </div>
            }
            <div className='skeleton-texts' style={{ display: imgLoaded ? 'none' : 'block' }}>
              <Skeleton variant='text' animation='wave' width='17.5rem' sx={textHeaderStyles} />
              <Skeleton variant='text' animation='wave' width='8.5rem' sx={textDescStyle} />
            </div>
          </div>
          <div className='purchase-price'>
            <div className='nft-tkn-group flex-center'>
              {imgLoaded &&
                <>
                  <Matic />
                  <div className='nft-tkn-price'>0.1</div>
                </>
              }
              <Skeleton variant='text' animation='wave' width='5rem' sx={textPriceStyle} />
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
