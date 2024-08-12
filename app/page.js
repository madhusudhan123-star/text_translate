
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Home from './desktop';
import MobileLayout from './mobile';

const ResponsiveLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 820);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileLayout /> : <Home />;
};

export default ResponsiveLayout;