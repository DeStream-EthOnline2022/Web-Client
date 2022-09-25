import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Home from './Home';
import Stream from './Stream';
import { AnimatePresence } from 'framer-motion';

type NavigationRoutesProps = {
  accountChanged: number
}

function NavigationRoutes(props: NavigationRoutesProps) {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [props.accountChanged]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='stream' element={<Stream />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default NavigationRoutes;
