// components/LottiePlayer.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const LottiePlayer = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/animations/Learning.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load animation:', err));
  }, []);

  if (!animationData) return <p>loading</p>;

  return (
    <div className='lg:w-1/2 '>
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default LottiePlayer;
