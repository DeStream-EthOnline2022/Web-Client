import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ethers } from 'ethers';
import { UserContext } from '../contexts/userContext';
import chains from '../utils/chains.json';
import ERC721_ABI from '../abi/erc721.json';

function Placeholder(props: any) {

  const { setShouldPurchase } = props;
  const userCtx = useContext(UserContext);

  const checkNft = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const nft = new ethers.Contract(chains[80001].contract, ERC721_ABI, provider);
      const balance = await nft.balanceOf(userCtx?.user.address);

      if (balance > 0) {
        // props.navigation.navigate('Livestream');
      } else {
        setShouldPurchase(true);
      }
    }
  }

  return (
    <motion.div
      className="placeholder-container flex-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className='placeholder-header'>Access Livestream</h2>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => checkNft()}
        className='placeholder-btn'
      >
        Go
      </motion.button>
    </motion.div>
  );
}

export default Placeholder;
