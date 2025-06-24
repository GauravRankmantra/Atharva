'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const MediaScroller = ({ media }) => {
  return (
    <div className="w-full px-4 py-8 relative overflow-hidden">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={24}
        slidesPerView={"auto"}
        speed={2000} // Increased speed for a slower, more deliberate continuous scroll
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
          waitForTransition: false,
        }}
        freeMode={{
          enabled: true,
          sticky: false,
          momentum: true,
          momentumRatio: 0.5,
          momentumVelocityRatio: 0.5,
        }}
        className="custom-swiper"
      >
        {media.map((item, index) => (
          <SwiperSlide key={index} className="!w-[480px]">
            <div className="rounded-2xl overflow-hidden shadow-xl  border-gray-700 transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-blue-500">
              {item.type === "image" ? (
                <img
                  src={item.url}
                  alt={`media-${index}`}
                  className="w-full h-[280px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              ) : (
                <video
                  src={item.url}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-[280px] object-cover"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Gradient overlays for a seamless visual */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Inline CSS for Swiper Wrapper and scrollbar hiding */}
      <style jsx>{`
        .custom-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .custom-swiper {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-swiper::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MediaScroller;