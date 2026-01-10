"use client";

import Image from "next/image";
import { Star, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import { testimonials } from "../data/testimonialsData";

export default function Testimonials() {
  return (
    <section className="bg-[#f6f3ef] py-24">
      <div className="container mx-auto px-6">

        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          loop="true"
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full flex flex-col justify-between bg-[#f6f3ef]">

                {/* Header */}
                <div className="flex items-center gap-5 mb-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-xl syne text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 funnel text-sm">
                      {item.role}
                    </p>

                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-black text-black"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <p className="text-base md:text-xl leading-relaxed text-gray-900 funnel mb-10">
                  {item.message}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Navigation */}
        <div className="flex items-center gap-6 md:mt-6">
          <button className="prev-btn w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-500 hover:border-black text-gray-500 hover:text-black cursor-pointer">
            <ArrowLeft />
          </button>

          <button className="next-btn w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-500 hover:border-black text-gray-500 hover:text-black cursor-pointer">
            <ArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}
