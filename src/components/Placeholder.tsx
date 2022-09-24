import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ethers } from 'ethers';
import { UserContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import chains from '../utils/chains.json';
import ERC721_ABI from '../abi/erc721.json';
import CircularProgress from '@mui/material/CircularProgress';

type PlaceholderProps = {
  setShouldPurchase: React.Dispatch<React.SetStateAction<boolean>>
}

function Placeholder(props: PlaceholderProps) {

  const { setShouldPurchase } = props;
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkNft = async () => {
    try {
      if (window.ethereum) {
        setIsLoading(true)
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const nft = new ethers.Contract(chains[80001].contract, ERC721_ABI, provider);
        const BNbalance = await nft.balanceOf(userCtx?.user.address);
        const balance = BNbalance.toNumber();
        if (balance > 0) {
          userCtx?.setUser({
            ...userCtx?.user,
            isMember: true
          });
          navigate('stream');
        } else {
          setShouldPurchase(true);
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false)
    }
  }

  const disabled = 
    userCtx?.user.address === '' ? 'disabled' : '';

  return (
    <motion.div
      className="placeholder-container flex-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className='placeholder-header'>Access Livestream</h2>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => checkNft()}
        className={`placeholder-btn flex-center ${disabled}`}
      >
        {isLoading ?
          <CircularProgress color='inherit' size='1.5rem' /> 
          :
          'Go'
        }
      </motion.button>
    </motion.div>
  );
}

export default Placeholder;
