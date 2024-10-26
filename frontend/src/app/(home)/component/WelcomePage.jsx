"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const WelcomePage = () => {
  const router = useRouter();
  const text = 'cluster community';

  useEffect(() => {
const timer = setTimeout(() => {
      router.push('/landingPage');
    }, 5000);

    // Cleanup the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [router]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className='bg-slate-900 w-full h-screen flex justify-center items-center'>
      <div>
        <motion.h1 
          className='text-8xl font-bold text-white'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          {text.split('').map((char, index) => (
            <motion.span key={char + '-' + index} variants={child}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
};

export default WelcomePage;
