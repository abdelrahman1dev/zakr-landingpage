// components/ReviewCarousel.tsx
'use client';

import { reviews } from '../constants/reviews';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ReviewCarousel() {
  return (




    <div className="w-full relative max-w-4xl h-full mx-auto py-12">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10">
        <button className="swiper-button-prev bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
          <ArrowLeft className="w-2 h-2" />
        </button>
      </div>
      <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10">
        <button className="swiper-button-next bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
          <ArrowRight className="w-2 h-2" />
        </button>
      </div>
      
      <h2 className=" text-black text-4xl font-bold mb-12 text-left">what people thinks about us?</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        pagination={{ clickable: true }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-12"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <Card className="bg-white shadow-md p-6 h-full flex flex-col items-center text-center hover:scale-98 transition-all duration-300">
              <Image
                src={review.image}
                alt={review.name}
                width={20}
                height={20}
                className="rounded-full w-12 h-12 mb-4 object-cover"
              />
              <CardContent className="space-y-2 text-black">
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm">{review.review}</p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
