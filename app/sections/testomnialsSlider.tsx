'use client';

import { reviews } from '../constants/reviews';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation , Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import FadeInWhenInView from '../components/FadeInWhenInView';
import { useTranslation } from '../hooks/useTranslation';

export default function ReviewCarousel() {
  const { t } = useTranslation();
  return (
    <section className="w-full relative max-w-4xl px-2 lg:px-0   mx-auto py-12">
      <FadeInWhenInView duration={0.8} delay={0}>
           <h2 className="text-black text-4xl font-bold mb-12 text-left">
        {t('landingPage.testimonialSection.title')}
      </h2>
      </FadeInWhenInView>

      {/* Background Decoration */}

      {/* Prev Button */}
      <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
        <button className="swiper-button-prev bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow transition">
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Next Button */}
      <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
        <button className="swiper-button-next bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow transition">
          <ArrowRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

<Swiper
  modules={[Pagination, Navigation, Autoplay]}
  autoplay={{
    delay: 1500,
    disableOnInteraction: false,
  }}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
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
            <Card className="bg-white shadow-md p-6 h-full flex flex-col items-center text-center hover:scale-[0.98] transition-all duration-300">
              <Image
                src={review.image}
                alt={review.name}
                width={80}
                height={80}
                className="rounded-full w-16 h-16 mb-4 object-cover"
              />
              <CardContent className="space-y-2 text-black">
                <h3 className="text-lg font-semibold">{t(`landingPage.testimonialSection.reviews.p${review.id}.name`)}</h3>
                <p className="text-sm">{t(`landingPage.testimonialSection.reviews.p${review.id}.text`)}</p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
