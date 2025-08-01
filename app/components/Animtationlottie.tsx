'use client';

import React from 'react';
import Lottie from 'lottie-react';
import learningAnimation from '@/public/animations/Learning.json'; // ✅ Adjust path as needed

const LottiePlayer = () => {
  return (
    <div className="lg:w-[550px]">
      <Lottie animationData={learningAnimation} loop={true} autoplay={true} />
    </div>
  );
};

export default LottiePlayer;
