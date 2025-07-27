// Animtationlottie.tsx
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../public/animations/sample.json'; // Replace with your actual animation file

const Animtationlottie = () => {
  return (
    <div className="w-64 h-64 mx-auto">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default Animtationlottie;
