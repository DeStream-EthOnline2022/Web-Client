import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { UserContext } from '../contexts/userContext';
import { Lock } from '../utils/Svgs';

function Stream() {

  const userCtx = useContext(UserContext);

  const [height, setHeight] = useState<number>(540);
  const frame = useRef<HTMLIFrameElement>(null);

  const playbackId = 'be83j9s3crqynkre';

  useEffect(() => {
    const handleResize = () => {
      const width = frame.current!.offsetWidth;
      const targetHeight = Number(width) * 9 / 16;
      setHeight(targetHeight);
      console.log(targetHeight)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className='home-container'>
      {userCtx?.user.isMember ?
        <motion.iframe
          ref={frame}
          src={`https://lvpr.tv?v=${playbackId}`}
          allowFullScreen
          allow='autoplay; encrypted-media; picture-in-picture'
          sandbox='allow-scripts'
          className='iframe'
          style={{ height }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
        </motion.iframe>
        :
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ height }}
          className='iframe-placeholder flex-center'
        >
          <Lock />
        </motion.div>
      }
      <div className='radial-gradient'></div>
    </div>
  );
}

export default Stream;
