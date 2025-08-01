"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

function Steps() {
  const planRef = useRef(null);
  const trackRef = useRef(null);
  const succeedRef = useRef(null);

  const planInView = useInView(planRef, { once: false, margin: '-20px' });
  const trackInView = useInView(trackRef, { once: false, margin: '-20px' });
  const succeedInView = useInView(succeedRef, { once: false, margin: '-20px' });



  return (
    <section className="relative flex items-center justify-center w-full h-[250vh]">
      {/* Plan */}
      <motion.div
        ref={planRef}
        initial="hidden"
        animate={planInView ? 'visible' : 'hidden'}
        className="bg-card w-60 h-68 rounded-lg absolute top-5 lg:right-80 flex items-center justify-center text-white"
      >
        <h1 className="text-xl font-bold text-center">plan</h1>
        <Image
          src={'../assets/toLeft-arrow.png'}
          alt="Left Arrow"
          width={32}
          height={32}
          className="absolute right-68 lg:w-full w-40 lg:right-72 top-20"
        />
      </motion.div>

      {/* Track */}
      <motion.div
        ref={trackRef}
        initial="hidden"
        animate={trackInView ? 'visible' : 'hidden'}
        className="bg-card w-60 h-68 rounded-lg absolute top-110 lg:left-80 left-5 flex items-center justify-center text-white"
      >
        <h1 className="text-xl font-bold text-center">track</h1>
        <Image
          width={32}
          height={32}
          src={'../assets/toRight-arrow.png'}
          alt="Right Arrow"
          className="absolute left-68 lg:w-full w-40 lg:left-72 top-20"
        />
      </motion.div>

      {/* Succeed */}
      <motion.div
        ref={succeedRef}
        initial="hidden"
        animate={succeedInView ? 'visible' : 'hidden'}
        className="bg-card w-60 h-68 rounded-lg absolute top-220 lg:right-90 flex items-center justify-center text-white"
      >
        <h1 className="text-xl font-bold text-center">succeed</h1>
      </motion.div>
    </section>
  );
}

export default Steps;
